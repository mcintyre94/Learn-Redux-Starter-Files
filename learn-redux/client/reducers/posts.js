/* Reducer takes in 2 things:
*  1. The action (info about what happened)
*  2. Copy of the current state
*/

const posts = (state = [], action) => {
  console.log("The post will change");
  console.log(state, action);
  return state;
};

export default posts;
