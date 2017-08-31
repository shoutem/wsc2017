import _ from 'lodash';
import { combineReducers } from 'redux';
import { find, collection, getCollection, cloneStatus } from '@shoutem/redux-io';
import { ext } from './extension';

const SPEAKERS_SCHEMA = 'wsc.people.People';
export default combineReducers({
  speakers: collection(SPEAKERS_SCHEMA),
});

export function getSpeakersForTalk(state, talkId) {
  const allSpeakers = getCollection(state[ext()].speakers, state);
  const talkSpeakers = _.filter(allSpeakers, { talkId });
  cloneStatus(allSpeakers, talkSpeakers);
  console.log(talkSpeakers);
  return talkSpeakers;
}

export function fetchSpeakers() {
  return find(SPEAKERS_SCHEMA);
}
