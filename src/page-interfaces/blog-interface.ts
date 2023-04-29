import {
  IGraphQLNode,
  IWordpressCategory,
  IWordPressPost,
} from '../global/global-interfaces';

export interface IBlogProperties {
  data: {
    posts: IGraphQLNode<IWordPressPost>;
    categories: IGraphQLNode<IWordpressCategory>;
  };
}
