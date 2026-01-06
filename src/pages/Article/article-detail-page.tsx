/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, useEffect, useState } from "react";

import { ArticleService } from "../../services/api";
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

      setDetailArticle(result.data);
    } catch (error) {
      console.error("Error fetching article detail:", error);
    }
  };

  useEffect(() => {
    if (!id) return;
    fetchArticleDetail();
  }, [id]);

  if (!detailAritcle) {
    return <p>Loading...</p>;
  }

  return (
    <DetailArticle
      title_en={detailAritcle.title_en}
      title_kh={detailAritcle.title_kh}
      description_en={detailAritcle.description_en}
      description_kh={detailAritcle.description_kh}
      image={detailAritcle.image}
    />
  );
};

export default ArticleDatailPage;
