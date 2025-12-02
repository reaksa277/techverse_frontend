import { lazy } from "react";

import DetailArticleContent from "../../content/DetailArticle.json";

const DetailArticle = lazy(() => import("../../components/Article"));

const ArticleDatailPage = () => {
    return(
        <DetailArticle
            title={DetailArticleContent.title}
            profile={DetailArticleContent.profile}
            author={DetailArticleContent.author}
            date={DetailArticleContent.date}
            tag={DetailArticleContent.tag}
            image={DetailArticleContent.image}
            content={DetailArticleContent.content}
        />
    );
}

export default ArticleDatailPage;
