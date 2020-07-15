import {
  searchResultAction,
  FETCH_VIDEOS,
  FETCH_COMMENTS,
  IComment,
  ADD_ERRORS,
  ADD_COMMENTS,
  ADD_VIDEOS,
  IError,
  CLEAR_COMMENTS,
  CLEAR_VIDEOS,
} from "../types/searchResultTypes";
import { IVideosState } from "../types/searchResultTypes";

export interface ICommentState {
  items: { items: IComment }[];
  nextPageToken: string;
  isLoading: boolean;
}

export interface IStateVideosInfo {
  videos: IVideosState;
  comments: ICommentState;
  errors: IError;
}

const initialState: IStateVideosInfo = {
  videos: {
    isLoading: true,
    items: [],
    nextPageToken: "",
  },
  comments: {
    items: [],
    isLoading: true,
    nextPageToken: "",
  },
  errors: {
    message: "",
    error: {
      error: false,
    },
  },
};

function searchResultReducer(state = initialState, action: searchResultAction) {
  switch (action.type) {
    case ADD_COMMENTS:
      return { ...state, comments: { ...state.comments, isLoading: true } };
    case CLEAR_COMMENTS:
      if (action.payload)
        return { ...state, comments: { items: [], isLoading: true } };
      else return state;
    case CLEAR_VIDEOS:
      if (action.payload)
        return { ...state, videos: { items: [], isLoading: true } };
      else return state;
    case ADD_VIDEOS:
      return { ...state, videos: { ...state.videos, isLoading: true } };
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: {
          items: [...state.videos.items, action.payload],
          IsLoading: action.payload.isLoading,
        },
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: {
          items: [...state.comments.items, action.payload],
          IsLoading: action.payload.isLoading,
          nextPageToken: action.payload.nextPageToken,
        },
      };
    case ADD_ERRORS:
      return {
        ...state,
        errors: {
          message: action.payload.message,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
}
export default searchResultReducer;
