import { Box } from "@mui/material";
import Container from "../../common/Container";
import DetailArticle from "../../components/Article";
import CommnunityDetailContent  from "../../content/CommunDetailContent.json"

const DetailCommunity = () => {
    return (
        <>
            <DetailArticle
                title={CommnunityDetailContent.title}
                image={CommnunityDetailContent.image}
                profile={CommnunityDetailContent.profile}
                author={CommnunityDetailContent.author}
                date={CommnunityDetailContent.date}
                tag={CommnunityDetailContent.tag}
                content={CommnunityDetailContent.content}
             />
             <Container>
                <Box sx={{ width: "595px", margin: "40px auto" }}>
                    
                </Box>
             </Container>
        </>
    );
}

export default DetailCommunity;
