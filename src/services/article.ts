const BASE_URL = "http://127.0.0.1:8000";

const PREFIX_V1 = "/api/v1"

const getArticles = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/articles/`);
}

const getServiceArticles = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/homepage/services/`);
}

export const ArticleService = {
    getArticles,
    getServiceArticles,
};
