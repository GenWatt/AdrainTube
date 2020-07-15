import {
  SET_SETTINGS,
  SettingsActions,
  ISettings,
} from "../types/settingsTypes";

const setSettings = (settings: ISettings): SettingsActions => ({
  type: SET_SETTINGS,
  payload: settings,
});

export default { setSettings };
