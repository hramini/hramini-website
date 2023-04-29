import { IWordpressCategory } from '../../global/global-interfaces';

export interface IMediaCategoryTemplate {
  readonly pageContext: {
    readonly categoryId: string;
  };

  readonly data: {
    readonly category: IWordpressCategory;
  };
}
