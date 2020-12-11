import { IItem, IComment } from "../duck/types/searchResultTypes";
import { Response, IFetchComments, IErrorFetch } from "./useFetchInterface";
import { MAX_VIDEOS, MAX_COMMNETS } from "../config/searchOptions";

class FetchData {
  readonly mainURL: string;
  readonly API_KEY: string;
  readonly videosURL: string;
  readonly commentsURL: string;

  public constructor() {
    /*
     You can get API key for free from https://console.developers.google.com/apis/credentials?project=youtube-films-281016&folder=&organizationId=
     */
    this.API_KEY = `key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    this.mainURL = "https://www.googleapis.com/youtube/v3/";
    this.videosURL = `${this.mainURL}search?${this.API_KEY}&type=video&part=snippet&maxResults=${MAX_VIDEOS}&fullscreen=1&q=`;
    this.commentsURL = `${this.mainURL}commentThreads?${this.API_KEY}&part=snippet&maxResults=${MAX_COMMNETS}&videoId=`;
  }

  /**
   * Get videos details from youtube API
   */
  public getVideos(searchValue: string): Promise<Response<IItem> | IErrorFetch> {
    return this.fetchVideos(searchValue);
  }

  /**
   * Get comment details from youtube API
   */
  public getComments(videoId: IFetchComments): Promise<Response<IComment> | IErrorFetch> {
    return this.fetchComments(videoId);
  }

  private async fetchVideos(searchValue: string): Promise<Response<IItem> | IErrorFetch> {
    try {
      const URL: string = this.videosURL + searchValue;
      const videos: Response<IItem> = await (await fetch(URL)).json();

      return videos;
    } catch (e) {
      return { massage: e.massage, error: true };
    }
  }

  private async fetchComments({
    videoId,
    nextPageToken,
  }: IFetchComments): Promise<Response<IComment> | IErrorFetch> {
    try {
      let URL: string = this.commentsURL + videoId;

      if (nextPageToken) URL = URL + "&pageToken=" + nextPageToken;
      const comments: Response<IComment> = await (await fetch(URL)).json();

      return comments;
    } catch (e) {
      return { massage: e.massage, error: true };
    }
  }
}

export default FetchData;
