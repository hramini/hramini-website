import { IGraphQLNode, IWordPressPost } from '../../global/global-interfaces';

export interface IMediaPostTemplateProperties {
  readonly pageContext: {
    readonly postId: string;
  };

  readonly data: {
    readonly post: IWordPressPost;
    readonly relatedPosts: IGraphQLNode<IWordPressPost>;
  };
}
