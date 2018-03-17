const postComments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      // return new state with the new comment
      return [
        ...state, // all the existing comments
        {
          // and a new one
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      console.log("removing!!");
      console.log(state);
      console.log(action.index);
      return [
        ...state.slice(0, action.index), // everything before the index to remove
        ...state.slice(action.index + 1) // everything after the index to remove
      ];
    default:
      return state;
  }
  return state;
};

const comments = (state = [], action) => {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
};

export default comments;
