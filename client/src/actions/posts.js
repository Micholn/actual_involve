import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data }); 
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await  api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


export const likePost = (id)  => async (dispatch) => {
    const 
    try {
        const { data } = await api.likePost(id, user?.token);
        
        dispatch({ type: })
    } catch (error) {
        console.log(error)
    }
}


export const deletePost = (id) => async (dispatch) => {
    try { 
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: data });

    }   catch (error) {
        console.log(error)
    }
} 

