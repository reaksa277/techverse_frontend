import { lazy, useEffect, useState } from "react";

import { ArticleService } from "../../services/article";
import { DetailArticleProps } from "../../components/Article/types";
import { useParams } from "react-router-dom";

const DetailArticle = lazy(() => import("../../components/Article"));

const ArticleDatailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [detailAritcle, setDetailArticle] = useState<DetailArticleProps | null>(
    null
  );

  const fetchArticleDetail = async () => {
    try {
      const response = await ArticleService.getArticleById(Number(id));
      const result = await response.json();

      console.log("result detail article: ", result);

      setDetailArticle(result.data);
    } catch (error) {
      console.error("Error fetching article detail:", error);
    }
  };

  useEffect(() => {
    fetchArticleDetail();
  }, [id]);

  return (
    <DetailArticle
      title_en={detailAritcle?.title_en || ""}
      title_kh={detailAritcle?.title_kh || ""}
      description_en={detailAritcle?.description_en || ""}
      description_kh={detailAritcle?.description_kh || ""}
      image={detailAritcle?.image || ""}
    />
  );
};

export default ArticleDatailPage;
