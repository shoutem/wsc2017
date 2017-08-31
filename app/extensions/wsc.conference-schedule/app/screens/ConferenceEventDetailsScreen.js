import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { connectStyle } from '@shoutem/theme';
import {
  Tile,
  ScrollView,
  View,
  Divider,
  Caption,
  Row,
  Subtitle,
  Icon,
  Image,
  TouchableOpacity,
} from '@shoutem/ui';
import { isInitialized } from '@shoutem/redux-io';

import { ext } from '../extension';
import { getSpeakersForTalk, fetchSpeakers } from '../redux';

import {
  DetailsScreen,
  mapDispatchToProps as baseMapDispatchToProps,
} from 'shoutem.events/screens/DetailsScreen';

export class ConferenceEventDetailsScreen extends DetailsScreen {
  componentDidMount() {
    const { speakers } = this.props;
    if (!isInitialized(speakers)) {
      this.props.fetchSpeakers();
    }
  }

  resolveNavBarProps(options) {
    return super.resolveNavBarProps({
      styleName: 'no-border',
      animationName: 'boxing',
      ...options,
    });
  }

  renderHeader(event) {
    return (
      <Tile styleName="text-centric xl-gutter-top">
        {this.renderHeadlineDetails(event)}
        {this.renderAddToCalendarButton()}
      </Tile>
    );
  }

  openSpeakerDetails(speaker) {
    const { navigateTo } = this.props;
    navigateTo({
      screen: 'wsc.people.PeopleDetailsScreen',
      props: {
        person: speaker,
      },
    });
  }

  renderSpeakers() {
    const { speakers } = this.props;
    if (_.isEmpty(speakers)) {
      return null;
    }

    const speakersList = (
      speakers.map(speaker => (
        <TouchableOpacity key={speaker.id} onPress={() => this.openSpeakerDetails(speaker)}>
          <Row styleName="small">
            <Image styleName="small-avatar" source={{ uri: speaker.image.url }} />
            <View styleName="vertical">
              <Subtitle>{speaker.firstName} {speaker.lastName}</Subtitle>
            </View>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </TouchableOpacity>
      ))
    );

    return (
      <View styleName="solid">
        <Divider styleName="section-header">
          <Caption>SPEAKERS</Caption>
        </Divider>
        {speakersList}
      </View>
    );
  }

  renderData(event) {
    return (
      <ScrollView>
        {this.renderHeader(event)}
        {this.renderRsvpButton(event)}
        {this.renderInformation(event)}
        {this.renderMap(event)}
        {this.renderSpeakers()}
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  speakers: getSpeakersForTalk(state, ownProps.event.sourceId),
});

const mapDispatchToProps = {
  ...baseMapDispatchToProps,
  fetchSpeakers,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  connectStyle(ext('ConferenceEventDetailsScreen'))(ConferenceEventDetailsScreen),
);
