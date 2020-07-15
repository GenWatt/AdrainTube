import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../Loader/Loader";
import Search from "../Search/Search";
import Overlay from "../Overlay/Overlay";
import randomSearch from "../../helpers/randomSearch";

import allActions from "../../duck/allActions";
import { RootState } from "../../duck/allReducers";

import { ContainerVideo, Header, ContainerVideoSection } from "./VideosStyle";
const VideosSection = React.lazy(() => import("../VideoSection/VideosSection"));

const Videos = () => {
  const state: RootState = useSelector((state: RootState) => state);
  const { bgVideo, search } = state.search;
  const { items, isLoading } = state.searchResult.videos;
  const { videoBackground } = state.settings.settings;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.searchResultsActions.clearVideos(true));
    dispatch(allActions.searchActions.randomSearch(randomSearch()));
  }, [dispatch]);

  let renderFilms;

  useEffect(() => {
    if (!search) return;
    dispatch(allActions.searchResultsActions.fetchVideos(search));
  }, [search, dispatch]);

  const videos = items
    .flat(1)
    .map((item) => item.items)
    .flat(1);

  if (!isLoading && videos.length) {
    renderFilms = (
      <ContainerVideoSection>
        {videos.map((video) => (
          <Suspense fallback={<Loader />} key={video.id.videoId}>
            <VideosSection video={video} />
          </Suspense>
        ))}
      </ContainerVideoSection>
    );
  }
  return (
    <ContainerVideo>
      <Search />
      {videoBackground && bgVideo && <Overlay bgVideo={bgVideo} />}
      <header>
        <Header>{search}</Header>
      </header>
      {renderFilms}
      {isLoading && <Loader />}
    </ContainerVideo>
  );
};

export default React.memo(Videos);
