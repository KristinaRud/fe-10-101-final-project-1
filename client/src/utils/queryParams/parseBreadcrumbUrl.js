export const parseBreadcrumbUrl = (url) => {
  const path = decodeURI(url)
    .split("/")
    .filter((item) => item !== "");
  const breadcrumbs = [];
  let breadcrumbUrl = "";

  breadcrumbs.push({ label: "Home", url: "/" });

  for (let i = 0; i < path.length; i += 1) {
    breadcrumbUrl += `/${path[i]}`;
    breadcrumbs.push({
      label: path[i],
      url: breadcrumbUrl,
    });
  }

  return breadcrumbs;
};
