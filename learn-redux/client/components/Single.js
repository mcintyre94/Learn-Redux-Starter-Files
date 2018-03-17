import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = props => {
  // Need index of the pos
  const { posts, params } = props;
  const postId = params.postId;
  const i = posts.findIndex(post => post.code === postId);
  const post = posts[i];
  const postComments = props.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo index={i} post={post} {...props} />
      <Comments postComments={postComments} />
    </div>
  );
};

export default Single;
