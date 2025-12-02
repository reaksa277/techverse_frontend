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
    path: ["/detail-article"],
    exact: true,
    component: "Article/article-detail-page",
  },
];

export default routes;
