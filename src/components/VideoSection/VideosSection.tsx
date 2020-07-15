import React from "react";
import { IItem } from "../../duck/types/searchResultTypes";
import { useDispatch } from "react-redux";
import allActions from "../../duck/allActions";
import {
  VideoBox,
  LinkToVideo,
  Thumbnail,
  Details,
  DescriptionBox,
  DescriptionText,
} from "./VideoSectionStyle";

interface Iprops {
  vertical?: boolean;
  video: IItem;
}

export default function VideosSection({ vertical, video }: Iprops) {
  const dispatch = useDispatch();

  return (
    <VideoBox vertical={vertical} key={video.id.videoId}>
      <LinkToVideo
        to={`/${video.id.videoId}`}
        onMouseOver={() => {
          if (!vertical)
            dispatch(
              allActions.searchActions.setBgVideo({
                url: `http://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&controls=0`,
                title: video.id.videoId,
              })
            );
        }}
      >
        <Thumbnail
          vertical={vertical}
          src={video.snippet.thumbnails.medium.url}
          title={video.id.videoId}
        ></Thumbnail>
      </LinkToVideo>
      <Details>
        <span>Channel name: </span>
        <strong>{video.snippet.channelTitle}</strong>
        <DescriptionBox>
          <span>Description: </span>
          <DescriptionText>{video.snippet.description}</DescriptionText>
        </DescriptionBox>
      </Details>
    </VideoBox>
  );
}
