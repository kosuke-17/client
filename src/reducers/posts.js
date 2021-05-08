export default (posts = [], action)=> {
  switch (action.type) {
    case 'UPDATE':
      return posts.map((post) => post._id === action.payload._id ? action.layload : post);
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
}