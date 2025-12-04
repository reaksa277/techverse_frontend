import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json";
import Container from "../../common/Container";

const ContactForm = lazy(() => import("../../components/ContactForm"));


const Contact = () => {
    return (
        <Container>
            <ContactForm
                title={ContactContent.title}
                content={ContactContent.text}
                id="contact"
             />
        </Container>
    );
}

export default Contact;
