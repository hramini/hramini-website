import { IWordPressPost } from '../../../global/global-interfaces';

export interface IPostTag {
  name: string;
}

export interface IPostCategory {
  name: string;
}

export interface IPostBoxProperties {
  post: IWordPressPost;
}
