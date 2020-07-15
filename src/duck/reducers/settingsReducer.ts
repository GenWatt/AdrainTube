import { SET_SETTINGS, SettingsActions } from "../types/settingsTypes";

interface IState {
  settings: { darkMode: boolean; videoBackground: boolean };
}

const initialState = {
  settings: { darkMode: true, videoBackground: true },
};

function settingsReducer(
  state: IState = initialState,
  action: SettingsActions
) {
  switch (action.type) {
    case SET_SETTINGS:
      return action.payload;
    default:
      return state;
  }
}

export default settingsReducer;
