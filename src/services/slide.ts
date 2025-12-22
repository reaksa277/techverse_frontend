import { BASE_URL, PREFIX_V1 } from "./article";


const getSlide = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/homepage/slides`);
}

const getAdvertisement = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/homepage/advertisement`);
}

export const SlideService = {
    getSlide,
    getAdvertisement,
};
