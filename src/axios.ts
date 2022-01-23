import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

const instance = axios.create({
    baseURL: REACT_APP_API_URI,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.response.use((res) => {
    let modifiedRes: any = res;
    const getAll = res.config.url === '/posts'
    const postDetails = res.config.url?.endsWith('?_embed=comments')

    if (res.config.method === 'get' && (getAll || postDetails)) {
        if (postDetails) {
            if (res.data.hasOwnProperty('title')) {
                modifiedRes = { data: res.data }
            } else {
                modifiedRes = { data: { ...res.data.data.post, id: res.data.id, comments: res.data.comments } }
            }

        } else if (getAll) {
            const result = res.data.map((post: any) => {
                if (post.hasOwnProperty('title')) {
                    return post
                }
                return { ...post.data.post, id: post.id }
            })
            modifiedRes = { data: result }
        }
    }

    return modifiedRes
});

export { instance as axios };