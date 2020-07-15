import { takeLatest, put, all } from "redux-saga/effects";
import FetchData from "../../helpers/useFetchAPI";
import {
  ADD_VIDEOS,
  ADD_COMMENTS,
  AddCommentsToState,
  AddVideoToState,
} from "../types/searchResultTypes";
import allActions from "../allActions";
import { IErrorFetch } from "../../helpers/useFetchInterface";

function* getVideos(action: AddVideoToState) {
  const callApi = yield new FetchData();
  const data = yield callApi.getVideos(action.payload);

  if (data.error && data.massage) yield dispatchError(data);
  else if (data.error && !data.massage) yield defaultError();
  else if (!data.error)
    yield put(allActions.searchResultsActions.addVideosToState(data));
}

function* getComments(action: AddCommentsToState) {
  const callApi = yield new FetchData();
  const data = yield callApi.getComments(action.payload);

  if (data.error && data.massage) yield dispatchError(data);
  else if (data.error && !data.massage) yield defaultError();
  else if (!data.error)
    yield put(allActions.searchResultsActions.addCommentsToState(data));
}

function* defaultError() {
  yield put(
    allActions.searchResultsActions.addErrorsAction({
      message: "Something goes wrong",
      error: { error: true },
    })
  );
}

function* dispatchError(data: IErrorFetch) {
  yield put(
    allActions.searchResultsActions.addErrorsAction({
      message: data.massage,
      error: { error: data.error },
    })
  );
}

function* watchAll() {
  yield all([
    takeLatest(ADD_VIDEOS, getVideos),
    takeLatest(ADD_COMMENTS, getComments),
  ]);
}

export default watchAll;
