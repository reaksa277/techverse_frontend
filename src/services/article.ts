export const BASE_URL = "http://127.0.0.1:8000";

export const PREFIX_V1 = "/api/v1"

const getArticles = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/articles/`);
}

const getServiceArticles = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/homepage/services/`);
}

const getBlogArticles = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/homepage/blogs/`);
}

const getCaseStudies = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/homepage/case-studies/`);
}

const getArticleById = (id: number) => {
    return fetch(`${BASE_URL}${PREFIX_V1}/detail-articles/${id}`);
}


export const ArticleService = {
    getArticles,
    getServiceArticles,
    getBlogArticles,
    getCaseStudies,
    getArticleById,
};
