import React from "react";
import { BgVideo } from "../../duck/types/search";
import { OverlayBox, OverlayVideo } from "./OverlayStyle";

export default function Overlay({ bgVideo }: { bgVideo: BgVideo }) {
  return (
    <OverlayBox>
      <OverlayVideo src={bgVideo.url} title={bgVideo.title}></OverlayVideo>
    </OverlayBox>
  );
}
