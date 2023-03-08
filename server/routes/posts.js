import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js'

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router; 








export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);


export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);


export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);

export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);

export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);

export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);
export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);
export const signIn = () => API.post('/user/signin', formData);
export const signUp = () => API.post('/user/signup', formData);