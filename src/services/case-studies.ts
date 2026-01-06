import { BASE_URL, PREFIX_V1 } from "./api";


const getCaseStudies = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/case-studies/`);
}

export const CaseStudiesService = {
    getCaseStudies,
}
