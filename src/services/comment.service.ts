import { axios } from "../axios";

export interface IComment {
    id?: number,
    postId: number,
    body: string
}

export const createComment = async (postId: number, body: string) => {
    try {
        const response = await axios.post('/comments', { data: { comment: { postId, body } } });
        return response.data;
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}
