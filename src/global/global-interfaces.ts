export interface IGraphQLNode<T> {
  nodes: Array<T>;
}

export interface IGraphQLObjectNode<T> {
  node: T;
}

export interface IGraphQLAll<T> {
  all: IGraphQLNode<T>;
}

export interface IGraphQLData<T> {
  data: IGraphQLAll<T>;
}

export interface IWordpressAvatar {
  readonly height: any;
  readonly width: any;
  readonly url: string;
}

export interface IWordpressTag {
  name: string;
}

export interface IWordpressAuthor {
  readonly name: string;
  readonly avatar: IWordpressAvatar;
}

export interface IWordpressCategory {
  readonly name: string;
  readonly link: string;
  readonly uri: string;
  readonly slug: string;
  readonly parentId: string;
  readonly posts: IGraphQLNode<IWordPressPost>;
}

export interface IWordpressFeaturedImage {
  readonly mediaDetails: any;
  readonly width: any;
  readonly height: any;
  readonly sizes: string;
  readonly srcSet: string;
  readonly sourceUrl: string;
  readonly altText: string;
}

export interface IWordPressPost {
  readonly id: string;
  readonly link: string;
  readonly title: string;
  readonly content: any;
  readonly slug: string;
  readonly uri: string;
  readonly status: string;
  readonly featuredImage: IGraphQLObjectNode<IWordpressFeaturedImage>;
  readonly author: IGraphQLObjectNode<IWordpressAuthor>;
  readonly date: string;
  readonly categories: IGraphQLNode<IWordpressCategory>;
  readonly tags: IGraphQLNode<IWordpressTag>;
  readonly excerpt: string;
}

export interface IWordpressProjectStack {
  id: string;
  name: string;
}

export interface IWordpressProject {
  title: string;
  projectDetails: {
    description: string;
    at: string;
    url: string;
    usedTechnologies: string;
  };
  technologies: IGraphQLNode<IWordpressProjectStack>;
}
