const BASE_URL = "http://127.0.0.1:8000";

const PREFIX_V1 = "/api/v1";

const getAllBlogs = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/blogs/`);
}

export const BlogService = {
    getAllBlogs,
}
