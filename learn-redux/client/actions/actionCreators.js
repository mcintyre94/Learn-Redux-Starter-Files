// increment likes
export const incrementLikes = postId => {
  return {
    type: "INCREMENT_LIKES",
    postId
  };
};

// add comment
export const addComment = (postId, author, comment) => {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};

// remove comment
export const removeComment = (postId, index) => {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index
  };
};
