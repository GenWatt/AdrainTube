export const SET_SETTINGS = "SET_SETTINGS";

export interface ISettings {
  settings: { darkMode: boolean; videoBackground: boolean };
}

interface SetSettings {
  type: typeof SET_SETTINGS;
  payload: ISettings;
}

export type SettingsActions = SetSettings;
