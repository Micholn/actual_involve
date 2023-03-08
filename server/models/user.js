import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
});

export default mongoose.model("User", userSchema);





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
