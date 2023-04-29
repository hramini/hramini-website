import { graphql } from 'gatsby';
import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import Flex from '../../components/flex/flex-component';
import Grid from '../../components/grid/grid-component';
import { GridLayoutType } from '../../components/grid/grid-enum';
import Layout from '../../components/layout/layout';
import ProjectBox from '../../components/project-box/project-box';
import {
  IWordpressProject,
  IWordpressProjectStack,
} from '../../global/global-interfaces';
import {
  IPortfolioProperties,
  IPortfolioState,
} from '../../page-interfaces/portfolio-interface';
import './portfolio.sass';

export default class Portfolio extends BaseComponent<
  IPortfolioProperties,
  IPortfolioState
> {
  public constructor(props: IPortfolioProperties) {
    super(props);

    this.state = {
      activeStackId: 'all',
    };

    props.data.stacks.nodes.splice(0, 0, {
      name: 'All',
      id: 'all',
    });
  }

  public render(): ReactElement {
    const { projects, stacks } = this.props.data;
    const { activeStackId } = this.state;
    const filteredProjects = this.getFilteredProjects();

    return (
      <Layout
        title="Projects"
        description="Projects in which I have collaborated"
      >
        <h1 className="portfolio_title">Portfolio</h1>
        <ul className="portfolio_stacks">
          {stacks.nodes.map(
            (stack: IWordpressProjectStack, index: number): ReactElement => {
              const { id, name } = stack;
              const STACK_ITEM_CLASS_NAME: string = 'portfolio_stacks__item';
              const classNames: string = this.setMultipleClassName([
                STACK_ITEM_CLASS_NAME,
                id === activeStackId ? `${STACK_ITEM_CLASS_NAME}--active` : '',
              ]);

              return (
                <li
                  key={index}
                  className={classNames}
                  onClick={(): void => {
                    this.onStackItemClick(id);
                  }}
                >
                  {name}
                </li>
              );
            }
          )}
        </ul>
        <Grid layout={GridLayoutType.ROW} wrap={true}>
          {filteredProjects.map(
            (project: IWordpressProject, index: number): ReactElement => {
              return (
                <Flex size={50} className="portfolio_project-box-holder">
                  <ProjectBox project={project} key={index} />
                </Flex>
              );
            }
          )}
        </Grid>
      </Layout>
    );
  }

  private onStackItemClick(stackId: string): void {
    this.setState({
      ...this.state,
      activeStackId: stackId,
    });
  }

  private getFilteredProjects(): IWordpressProject[] {
    const { projects } = this.props.data;
    const { activeStackId } = this.state;

    if (activeStackId === 'all') {
      return projects.nodes;
    }

    const filteredProjects: IWordpressProject[] = projects.nodes.filter(
      (project: IWordpressProject): boolean => {
        const foundIndex: number = project.technologies.nodes.findIndex(
          (stack: IWordpressProjectStack): boolean => {
            return stack.id === activeStackId;
          }
        );

        return foundIndex >= 0;
      }
    );

    return filteredProjects;
  }
}

export const query = graphql`
  query GetPortfolioData {
    projects: allWpProject {
      nodes {
        title
        projectDetails {
          at
          description
          url
          usedTechnologies
        }
        technologies {
          nodes {
            name
            id
          }
        }
      }
    }
    stacks: allWpTechnology {
      nodes {
        name
        id
      }
    }
  }
`;
