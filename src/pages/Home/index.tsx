import { lazy } from "react";
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
      <HeroSection />
      <Container>
        <ServiceSection />
        <CaseStudySection />
        <BlogSection />
        <CommunSection />
      </Container>
    </>
  );
};

export default Home;
