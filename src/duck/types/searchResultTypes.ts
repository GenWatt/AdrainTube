import { ICommentState } from "../reducers/searchResultReducer";
export const FETCH_VIDEOS = "FETCH_VIDEOS";
export const ADD_VIDEOS = "ADD_RESULTS";
export const CLEAR_VIDEOS = "CLEAR_VIDEOS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";
export const ADD_ERRORS = "ADD_ERRORS";

export interface Iid {
  videoId: string;
}

export interface Isnippet {
  channelTitle: string;
  description: string;
  thumbnails: {
    default: { url: string };
    medium: { url: string };
    high: { url: string };
  };
}

export interface IComment {
  snippet: {
    topLevelComment: {
      snippet: {
        textOriginal: string;
        likeCount: number;
        authorProfileImageUrl: string;
        authorDisplayName: string;
        publishedAt: string;
      };
    };
  };
  id: string;
}

export interface IItem {
  id: Iid;
  snippet: Isnippet;
}

export interface IVideosState {
  items: { items: IItem[] }[];
  isLoading: boolean;
  nextPageToken: string;
}

export interface IOptions {
  parameters: string;
  queries?: string;
  type: string;
}

export interface IError {
  message: string;
  error: { message?: string; code?: number; error: boolean };
}

export interface AddVideoToState {
  type: typeof ADD_VIDEOS;
  payload: string;
}

export interface AddErrorsAction {
  type: typeof ADD_ERRORS;
  payload: IError;
}

export interface AddCommentsToState {
  type: typeof ADD_COMMENTS;
  payload: { videoId: string; nextPageToken?: string };
}

export interface FetchVideos {
  type: typeof FETCH_VIDEOS;
  payload: IVideosState;
}

export interface FetchComments {
  type: typeof FETCH_COMMENTS;
  payload: ICommentState;
}

export interface ClearVideos {
  type: typeof CLEAR_VIDEOS;
  payload: boolean;
}

export interface ClearComments {
  type: typeof CLEAR_COMMENTS;
  payload: boolean;
}

export type searchResultAction =
  | AddVideoToState
  | FetchVideos
  | FetchComments
  | AddCommentsToState
  | AddErrorsAction
  | ClearComments
  | ClearVideos;
