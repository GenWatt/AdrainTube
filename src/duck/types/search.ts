export const CUSTOM_SEARCH = "CUSTOM_SEARCH";
export const RANDOM_SEARCH = "RANDOM_SEARCH";
export const SET_BG_VIDEO = "SET_BG_VIDEO";

export interface BgVideo {
  url: string;
  title: string;
}

interface randomSearchAction {
  type: typeof RANDOM_SEARCH;
  payload: string;
}

interface customSearchAction {
  type: typeof CUSTOM_SEARCH;
  payload: string;
}

interface SetBgVideoAction {
  type: typeof SET_BG_VIDEO;
  payload: BgVideo;
}

export type searchAction =
  | customSearchAction
  | randomSearchAction
  | SetBgVideoAction;
