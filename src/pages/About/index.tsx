import Container from "../../common/Container";
import ContentBlock from "../../components/ContentBlock";
import PageHeader from "../../components/PageHeader";
import About from "../../content/AboutContent/About.json";

const AboutPage = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Empowering Businesses Through Technology & Innovation"
      />
      <Container>
        <ContentBlock
          direction="right"
          title={About.title}
          content={About.content}
          image={About.image}
          id="about"
        />
      </Container>
    </>
  );
};

export default AboutPage;
