// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';

// screens imports
import ConferenceEventDetailsScreen from './screens/ConferenceEventDetailsScreen';
import MyTicketScreen from './screens/MyTicketScreen';

// themes imports


export const screens = {
  ConferenceEventDetailsScreen,
  MyTicketScreen
};

export const themes = {

};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
