import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";

export default (posts = [], action) => {
    switch (action.type) {
      case FETCH_ALL: 
        return action.payload;
      case LIKE: 
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case CREATE: 
        return 
      case UPDATE: 
        return 
      case DELETE: 
        return 

    }
}