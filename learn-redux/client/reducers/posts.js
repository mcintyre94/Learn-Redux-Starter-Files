/* Reducer takes in 2 things:
*  1. The action (info about what happened)
*  2. Copy of the current state
*/

const posts = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT_LIKES":
      // return updated state
      console.log("incrementing likes");
      const i = action.postId;
      return [
        ...state.slice(0, i), // before what we're updating
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1) // after what we're updating
      ];
    default:
      return state;
  }
};

export default posts;
