import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [] }, 
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
























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