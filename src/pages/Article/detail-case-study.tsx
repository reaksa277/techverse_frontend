import Container from "../../common/Container";
import HeadTitle from "../../components/Block/headTitle";

import HeadTitleContent from "../../content/CaseStudyContent/HeadTitle.json"

const CaseStudyDetail = () => {
  return (
    <>
    <Container>
        <HeadTitle
            title={HeadTitleContent.title}
            image={HeadTitleContent.image}
            author={HeadTitleContent.author}
            profile={HeadTitleContent.profile}
            tag={HeadTitleContent.tag}
        />
    </Container>
    </>
  );
};

export default CaseStudyDetail;
