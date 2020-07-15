import {
  searchAction,
  CUSTOM_SEARCH,
  RANDOM_SEARCH,
  SET_BG_VIDEO,
  BgVideo,
} from "../types/search";

interface Istate {
  search: string;
  bgVideo: BgVideo;
}

const searchState: Istate = {
  search: "",
  bgVideo: {
    url: "",
    title: "",
  },
};

function searchReducer(state = searchState, action: searchAction) {
  switch (action.type) {
    case CUSTOM_SEARCH:
      return { ...state, search: action.payload };
    case RANDOM_SEARCH:
      return { ...state, search: action.payload };
    case SET_BG_VIDEO:
      return {
        ...state,
        bgVideo: { url: action.payload.url, title: action.payload.title },
      };

    default:
      return state;
  }
}

export default searchReducer;
