import React, { useEffect } from "react";
import Loader from "../Loader/Loader";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import {
  CommentContainer,
  CommentDetails,
  User,
  UserAvatar,
  CommentText,
  MoreInfo,
  Likes,
  PublishInfo,
} from "./CommentStyle";

import allActions from "../../duck/allActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../duck/allReducers";
import { Iid } from "../../duck/types/searchResultTypes";
import { OFFSET_TO_LOAD_COMMENT } from "../../config/searchOptions";
import { useCallback } from "react";

function Comment({ videoId }: Iid) {
  let { items, isLoading, nextPageToken } = useSelector(
    (state: RootState) => state.searchResult.comments
  );
  const dispatch = useDispatch();

  const loadMoreComments =useCallback(()=>{
    if (!isLoading)
    dispatch(
      allActions.searchResultsActions.fetchComments({
        videoId,
        nextPageToken,
      })
    );
  },[isLoading,nextPageToken,videoId,dispatch]) 
   
  const scrollHandler = useCallback(()=>{ 
    const windowHeight: number = window.innerHeight;
    const bodyHeight: number = document.body.offsetHeight;
    const scroll: number = window.scrollY;

    if (
      bodyHeight - OFFSET_TO_LOAD_COMMENT <= scroll + windowHeight &&
      nextPageToken
    )
      loadMoreComments()
    },[loadMoreComments,nextPageToken]) 
   
  

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [items,scrollHandler]);

  useEffect(() => {
    dispatch(allActions.searchResultsActions.fetchComments({ videoId }));
  }, [videoId, dispatch]);

  const comments = items
    .flat(1)
    .map((item) => item.items)
    .flat(1);

  return (
    <CommentContainer>
      {comments.length &&
        comments.map((comment) => {
          const { snippet } = comment.snippet.topLevelComment;
          return (
            <CommentDetails key={comment.id}>
              <User>
                <UserAvatar src={snippet.authorProfileImageUrl} />
                <strong>{snippet.authorDisplayName}</strong>
              </User>
              <CommentText>{snippet.textOriginal}</CommentText>
              <MoreInfo>
                <Likes>
                  <ThumbUpIcon />
                  {snippet.likeCount}
                </Likes>
                <PublishInfo>{snippet.publishedAt}</PublishInfo>
              </MoreInfo>
            </CommentDetails>
          );
        })}
      {(isLoading || !comments.length) && <Loader />}
    </CommentContainer>
  );
}

export default Comment;
