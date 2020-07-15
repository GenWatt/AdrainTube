import { combineReducers } from "redux";
import searchReducer from "./reducers/searchReducer";
import searchResultReducer, {
  IStateVideosInfo,
} from "./reducers/searchResultReducer";
import settingsReducer from "./reducers/settingsReducer";
import { BgVideo } from "./types/search";
import { ISettings } from "./types/settingsTypes";

export interface RootState {
  search: {
    search: string;
    bgVideo: BgVideo;
    videoToPlay: string;
  };
  searchResult: IStateVideosInfo;
  settings: ISettings;
}

export const rootReducer = combineReducers({
  search: searchReducer,
  searchResult: searchResultReducer,
  settings: settingsReducer,
});
