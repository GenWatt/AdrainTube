export interface Response<T> {
  [x: string]: any;
  isLoading: boolean;
  items: T;
  nextPageToken: string;
}

export interface IFetchComments {
  videoId: string;
  nextPageToken?: string;
}

export interface IErrorFetch {
  massage: string;
  error: boolean;
}
