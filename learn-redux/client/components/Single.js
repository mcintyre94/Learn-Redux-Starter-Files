import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = props => {
  // Need index of the pos
  const { posts, params } = props;
  const i = posts.findIndex(post => post.code === params.postId);
  const post = posts[i];
  console.log(post);
  return (
    <div className="single-photo">
      <Photo index={i} post={post} {...props} />
      <Comments />
    </div>
  );
};

export default Single;
