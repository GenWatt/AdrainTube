import React from "react";
import { LoaderBox, Dot } from "./LoaderStyle";

export default function Loader() {
  return (
    <LoaderBox>
      <Dot />
      <Dot />
      <Dot />
    </LoaderBox>
  );
}
