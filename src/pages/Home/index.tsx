import { lazy } from "react";
import Herosection from "../../content/HeroSection.json";
import CaseStudy from "../../content/CaseStudy.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import paymentImg from "../../assets/payment.jpg";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const HeroSection = lazy(() => import("../../layouts/heroSection"));
const ServiceSection = lazy(() => import("../../layouts/serviceSection"));


const Home = () => {
  return (
    <>
        <HeroSection
            title={Herosection.title}
            subtitle={Herosection.subtitle}
            button={Herosection.button}
        />
        <Container>
        <ScrollToTop />
        <ServiceSection />
        <ContentBlock
            direction="right"
            title={CaseStudy.title}
            content={CaseStudy.text}
            list={CaseStudy.list}
            button={CaseStudy.button}
            image={paymentImg}
            id="case-study"
        />
        <ContentBlock
            direction="left"
            title={ProductContent.title}
            content={ProductContent.text }
            icon="waving.svg"
            id="product"
        />
        <Contact
            title={ContactContent.title}
            content={ContactContent.text}
            id="contact"
        />
        </Container>
    </>
  );
};

export default Home;
