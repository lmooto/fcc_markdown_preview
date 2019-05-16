import { ENTER_TEXT, TOGGLE_HELP } from './types';

export const enterText = (rawText) => {
  return {
    type: ENTER_TEXT,
    payload: rawText,
  };
};

export const showHelp = () => {
  return {
    type: TOGGLE_HELP,
  };
};
