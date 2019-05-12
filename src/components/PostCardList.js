import React from 'react';
import PropTypes from 'prop-types';
import PostCard from './PostCard';
import { Grid, Cell } from 'styled-css-grid';

const PostCardList = props => {
  return (
    <nav>
      <Grid columns="repeat(auto-fit,minmax(260px,1fr))" gap="30px" alignContent="stretch">
        {props.posts.map(post => (
          <Cell key={post.fields.slug}>
            <PostCard post={post} {...props} />
          </Cell>
        ))}
      </Grid>
    </nav>
  );
};

PostCardList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostCardList;
