import React, { Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { RootState } from "../../duck/allReducers";
import allActions from "../../duck/allActions";
import Loader from "../Loader/Loader";
import { PlayVideoSection, MainVideo, AsideVideos } from "./PlayVideoStyle";
const VideosSection = React.lazy(() => import("../VideoSection/VideosSection"));
const Comment = React.lazy(() => import("../Comments/Comment"));

export default function PlayVideo() {
  const { videoId } = useParams<{ videoId: string }>();
  const { items, isLoading } = useSelector(
    (state: RootState) => state.searchResult.videos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.searchResultsActions.clearComments(true));
  }, [videoId, dispatch]);

  if (isLoading) {
    dispatch(allActions.searchActions.customSearch(""));
    return <Redirect to="/" />;
  }
  const videos = items.map((item) => item.items).flat(1);

  return (
    <PlayVideoSection>
      <MainVideo
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={videoId}
      ></MainVideo>
      <Suspense fallback={<Loader />}>
        <Comment videoId={videoId} />
      </Suspense>
      <AsideVideos>
        <Suspense fallback={<Loader />}>
          {videos.map((video) => {
            if (video.id.videoId === videoId) return null;
            return (
              <VideosSection
                video={video}
                key={video.id.videoId}
                vertical={true}
              />
            );
          })}
        </Suspense>
      </AsideVideos>
    </PlayVideoSection>
  );
}
