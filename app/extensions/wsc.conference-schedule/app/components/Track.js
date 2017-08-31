import React, { Component } from 'react';
import {
  View,
  Text,
} from '@shoutem/ui';

const styles = {
  container: {
    marginHorizontal: 45,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trackItem: {
    width: 30,
    height: 30,
    backgroundColor: '#888888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTrackItem: {
    backgroundGradient: {
      colors: ['#ff573b', '#ff914a'],
      start: { x: 0.0, y: 1.0 },
      end: { x: 1.0, y: 0.0 },
      locations: [0, 1],
    },
  },
  trackItemName: {
    fontSize: 12,
    color: 'white',
  },
};

export default class Track extends Component {
  renderTrackItem(name, isActive) {
    const trackItemStyle = isActive ? {
      ...styles.trackItem,
      ...styles.activeTrackItem,
    } : styles.trackItem;

    return (
      <View key={name} style={trackItemStyle}>
        <Text style={styles.trackItemName}>{name}</Text>
      </View>
    );
  }

  render() {
    const { activeTrack } = this.props;
    const tracks = ['UX', 'eZ', 'PHP', 'JS'].map(
      track => this.renderTrackItem(track, track.toLowerCase() === activeTrack)
    );

    return (
      <View style={styles.container}>
        {tracks}
      </View>
    );
  }
}
