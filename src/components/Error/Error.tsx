import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../duck/allReducers";
import { ErrorSection, ErrorMessage } from "./ErrorStyles";

const fadeErrorMsgVariant = {
  initial: {
    opacity: 0,
    top: -100,
  },
  animate: {
    opacity: 1,
    top: 0,
  },
  exit: {
    opacity: 0,
    top: 100,
  },
};

export default function Error() {
  const { errors } = useSelector((state: RootState) => state.searchResult);

  return (
    <ErrorSection
      variants={fadeErrorMsgVariant}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <ErrorMessage>
        {errors.message ? (
          <p>{errors.message}</p>
        ) : (
          <>
            <span style={{ fontSize: 1.6 + "em" }}>{errors.error.code}</span>
            <p style={{ margin: 3 }}>{errors.error.message}</p>
          </>
        )}
      </ErrorMessage>
    </ErrorSection>
  );
}
