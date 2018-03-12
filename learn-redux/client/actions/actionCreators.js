// increment likes
const incrementLikes = postId => {
  return {
    type: "INCREMENT_LIKES",
    index
  };
};

// add comment
const addComment = (postId, author, comment) => {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
};

// remove comment
const removeComment = (postId, index) => {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index
  };
};
