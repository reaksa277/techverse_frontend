import { lazy } from "react";
import CommunContent from "../../content/CommunContent.json";
import CaseStudySection from "../../layouts/blogSection/case-studies";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const HeroSection = lazy(() => import("../../layouts/heroSection"));
const ServiceSection = lazy(() => import("../../layouts/serviceSection"));
const BlogSection = lazy(() => import("../../layouts/blogSection"));
const CommunSection = lazy(() => import("../../layouts/CommunSection"));

const Home = () => {
  return (
    <>
    <ScrollToTop />
      <HeroSection
        title_en="Hero.title_en"
        title_kh="Hero.title_kh"
        description_en="Hero.description_en"
        description_kh="Hero.description_kh"
        url="Hero.url"
      />
      <Container>
        <ServiceSection />
        <CaseStudySection />
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
