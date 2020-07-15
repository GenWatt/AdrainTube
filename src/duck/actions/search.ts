import {
  searchAction,
  CUSTOM_SEARCH,
  RANDOM_SEARCH,
  SET_BG_VIDEO,
  BgVideo,
} from "../types/search";

const customSearch = (search: string): searchAction => ({
  type: CUSTOM_SEARCH,
  payload: search,
});

const randomSearch = (search: string): searchAction => ({
  type: RANDOM_SEARCH,
  payload: search,
});

const setBgVideo = (bgVideo: BgVideo): searchAction => ({
  type: SET_BG_VIDEO,
  payload: bgVideo,
});

export default {
  customSearch,
  randomSearch,
  setBgVideo,
};
