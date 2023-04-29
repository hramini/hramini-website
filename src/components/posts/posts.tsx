import React, { ReactElement } from 'react';
import BaseComponent from '../../base/base-component';
import PostBox from './box/post-box';
import Flex from '../flex/flex-component';
import Grid from '../grid/grid-component';
import { GridLayoutType } from '../grid/grid-enum';
import { IPostsProperties } from './posts-interface';
import { IWordPressPost } from '../../global/global-interfaces';
import './posts.sass';

export default class Posts extends BaseComponent<IPostsProperties> {
  public render(): ReactElement {
    const { posts } = this.props;

    return (
      <Grid layout={GridLayoutType.ROW} className="c-posts">
        {posts.map((post: IWordPressPost, index: number): ReactElement => {
          return (
            <Flex size={50} key={index} className="c-posts_flex">
              <PostBox post={post} />
            </Flex>
          );
        })}
      </Grid>
    );
  }
}
