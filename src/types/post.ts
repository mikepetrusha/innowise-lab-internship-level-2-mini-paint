export interface IPostState {
  posts?: Array<IPost>;
  loading: boolean;
  error: null | string;
}

export interface IPost {
  id: string;
  email: string;
  date: number;
  path: string;
}
