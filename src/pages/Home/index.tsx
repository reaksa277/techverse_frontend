import { lazy } from "react";
import Herosection from "../../content/HeroSection.json";
import CaseStudy from "../../content/CaseStudy.json";
import paymentImg from "../../assets/payment.jpg";
import CommunContent from "../../content/CommunContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const HeroSection = lazy(() => import("../../layouts/heroSection"));
const ServiceSection = lazy(() => import("../../layouts/serviceSection"));
const BlogSection = lazy(() => import("../../layouts/blogSection"));
const CommunSection = lazy(() => import("../../layouts/CommunSection"));

const Home = () => {
  return (
    <>
    <ScrollToTop />
      <HeroSection
        title={Herosection.title}
        subtitle={Herosection.subtitle}
        button={Herosection.button}
        id="header"
      />
      <Container>
        <ServiceSection />
        <ContentBlock
          direction="left"
          title={CaseStudy.title}
          content={CaseStudy.text}
          list={CaseStudy.list}
          button={CaseStudy.button}
          image={paymentImg}
          id="case-study"
        />
        <BlogSection />
        <CommunSection
          title={CommunContent.title}
          subtitle={CommunContent.subtitle}
          button={CommunContent.button}
        />
      </Container>
    </>
  );
};

export default Home;
