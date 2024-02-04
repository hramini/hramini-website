import {
  IGraphQLNode,
  IWordpressProject,
  IWordpressProjectStack,
} from '../global/global-interfaces';

export interface IPortfolioProperties {
  data: {
    projects: IGraphQLNode<IWordpressProject>;
    stacks: IGraphQLNode<IWordpressProjectStack>;
  };
}

export interface IPortfolioState {
  activeStackId: string;
}
