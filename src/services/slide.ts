import { BASE_URL, PREFIX_V1 } from "./article";


const getSlide = () => {
    return fetch("http://127.0.0.1:8000/api/slides/")
}

const getAdvertisement = () => {
    return fetch(`${BASE_URL}${PREFIX_V1}/homepage/advertisement/`)
}

export const SlideService = {
    getSlide,
    getAdvertisement,
};
