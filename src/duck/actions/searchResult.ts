import {
  searchResultAction,
  ADD_VIDEOS,
  FETCH_VIDEOS,
  FETCH_COMMENTS,
  ADD_COMMENTS,
  IError,
  ADD_ERRORS,
  CLEAR_COMMENTS,
  CLEAR_VIDEOS,
} from "../types/searchResultTypes";
import { IVideosState } from "../types/searchResultTypes";
import { ICommentState } from "../reducers/searchResultReducer";

const fetchVideos = (searchValue: string): searchResultAction => ({
  type: ADD_VIDEOS,
  payload: searchValue,
});

const fetchComments = (parameters: { videoId: string; nextPageToken?: string }): searchResultAction => ({
  type: ADD_COMMENTS,
  payload: parameters,
});

const addVideosToState = (videos: IVideosState): searchResultAction => ({
  type: FETCH_VIDEOS,
  payload: videos,
});

const clearVideos = (clear: boolean): searchResultAction => ({
  type: CLEAR_VIDEOS,
  payload: clear,
});

const addCommentsToState = (items: ICommentState): searchResultAction => ({
  type: FETCH_COMMENTS,
  payload: items,
});

const clearComments = (clear: boolean): searchResultAction => ({
  type: CLEAR_COMMENTS,
  payload: clear,
});

const addErrorsAction = (error: IError): searchResultAction => ({
  type: ADD_ERRORS,
  payload: error,
});

export default {
  addVideosToState,
  fetchVideos,
  addCommentsToState,
  fetchComments,
  addErrorsAction,
  clearComments,
  clearVideos,
};
