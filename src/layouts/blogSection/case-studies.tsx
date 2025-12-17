import { useEffect, useState } from "react";
import ContentBlock from "../../components/ContentBlock";
import { ArticleService } from "../../services/article";
import { ContentBlockProps } from "../../components/ContentBlock/types";


const CaseStudySection = () => {
  const [caseStudyData, setCaseStudyData] = useState<ContentBlockProps | null>(
    null
  );

  const fetchData = async () => {
    try {
      const response = await ArticleService.getCaseStudies();
      const result = await response.json();

      setCaseStudyData(result.data[0]);
    } catch (err) {
      console.error("Failed to fetch case studies", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!caseStudyData) {
    return <div>Loading...</div>;
  }
  return (
    <ContentBlock
      direction="left"
      title_en={caseStudyData.title_en}
      title_kh={caseStudyData.title_kh}
      info_en={caseStudyData.info_en}
      info_kh={caseStudyData.info_kh}
      discription_en={caseStudyData.discription_en}
      discription_kh={caseStudyData.discription_kh}
      url={caseStudyData.url}
      linkName="View Case Studies"
      image={caseStudyData.image}
      id="case-study"
    />
  );
};

export default CaseStudySection;
