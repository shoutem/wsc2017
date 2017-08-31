// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';

// screens imports
import ConferenceEventDetailsScreen from './screens/ConferenceEventDetailsScreen';

// themes imports


export const screens = {
  ConferenceEventDetailsScreen,
};

export const themes = {

};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
