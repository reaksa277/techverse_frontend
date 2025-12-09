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
    path: ["/case-study"],
    exact: true,
    component: "CaseStudies",
  },
  {
    path: ["/contact"],
    exact: true,
    component: "Contact",
  },
  {
    path: ["/profile"],
    exact: true,
    component: "Profile",
  },
  {
    path: ["/community"],
    exact: true,
    component: "Community",
  },
  {
    path: ["/detail-community"],
    exact: true,
    component: "Community/detail-community",
  },
  {
    path: ["/development"],
    exact: true,
    component: "Service/development",
  },
  {
    path: ["/detail-article"],
    exact: true,
    component: "Article/article-detail-page",
  },
  {
    path: ["/detail-case-study"],
    exact: true,
    component: "Article/detail-case-study",
  },
];

export default routes;
