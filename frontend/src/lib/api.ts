import axios from 'axios';

const BASE_URL = 'http://localhost:8080'

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/post`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};

export const fetchSinglePost = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};

export const makeNewPost = async (postData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/post/`, postData);
        return response.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};

export const updateExistPost = async (postData, postId) => {
    try {
        const response = await axios.patch(`${BASE_URL}/api/post/${postId}`, postData);
        return response.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};

export const deleteExistPost = async (postId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/post/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};