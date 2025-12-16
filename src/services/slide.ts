
const getSlide = () => {
    return fetch("http://127.0.0.1:8000/api/slides/")
}

export const SlideService = {
    getSlide,
};
