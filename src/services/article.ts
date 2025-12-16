const getArticles = () => {
    return fetch("http://127.0.0.1:8000/api/articles/");
}

const getServiceArticles = () => {
    return fetch("http://127.0.0.1:8000/api/homepage/services/");
}

export const ArticleService = {
    getArticles,
    getServiceArticles,
};
