const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/blog"],
    exact: true,
    component: "Blog",
  },
  {
    path: ["/about-us"],
    exact: true,
    component: "About",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
  {
    path: ["/detail-article"],
    exact: true,
    component: "Article/article-detail-page",
  },
];

export default routes;
