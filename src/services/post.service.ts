import { axios } from "../axios";

import { IComment } from './comment.service'

export interface IPost {
    id?: number,
    title: string,
    body: string,
    comments?: IComment[]
}

export const getPosts = async () => {
    try {
        const response = await axios.get('/posts');
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export const getPost = async (id: number) => {
    try {
        const response = await axios.get(`/posts/${id}?_embed=comments`);
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export const createPost = async (post: IPost) => {
    try {
        const response = await axios.post('/posts', { data: { post } });
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export const updatePost = async (id: number, post: IPost) => {
    try {
        const response = await axios.put(`/posts/${id}`, { data: { post } });
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}

export const deletePost = async (id: number) => {
    try {
        const response = await axios.delete(`/posts/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}