export const updatedQueryString = (queryString) => {
  return queryString.replace(/%2B/g, "+");
};
