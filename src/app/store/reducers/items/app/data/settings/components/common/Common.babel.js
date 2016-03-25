import { combineReducers } from 'redux';
import sharing from './sharing/Sharing';
import builderText from 'mode!isBuilder?i18n!translations/builder/nls/template';

// TODO global to common in path
const defaultParticipateShort = builderText ? builderText.appDataPlaceholderText.globals.participateShort : '';
const defaultParticipateLong = builderText ? builderText.appDataPlaceholderText.globals.participateLong : '';
const defaultExploreText = builderText ? builderText.appDataPlaceholderText.globals.exploreText : '';

export const participateShort = function (state = defaultParticipateShort, action) {
  switch (action.type) {
    case 'UPDATE_SETTINGS_COMMON_PARTICIPATE_SHORT':
      return action.text;
    default:
      return state;
  }
};

export const participateLong = function (state = defaultParticipateLong, action) {
  switch (action.type) {
    case 'UPDATE_SETTINGS_COMMON_PARTICIPATE_LONG':
      return action.text;
    default:
      return state;
  }
};

export const exploreText = function (state = defaultExploreText, action) {
  switch (action.type) {
    case 'UPDATE_SETTINGS_COMMON_EXPLORE_TEXT':
      return action.text;
    default:
      return state;
  }
};

export const common = combineReducers({
  participateShort,
  participateLong,
  exploreText,
  sharing
});

export default common;
