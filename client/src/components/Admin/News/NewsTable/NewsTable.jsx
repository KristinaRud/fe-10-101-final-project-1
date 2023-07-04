import BasicTableStructure from "../../BasicTableStructure/BasicTableStructure";
import NewsTableHeader from "./NewsTableHeader/NewsTableHeader";
import NewsTableBody from "./NewsTableBody/NewsTableBody";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/news",
    label: "News",
  },
];

const NewsTable = () => {
  return (
    <BasicTableStructure
      linkToNew={"news"}
      addNew={"news"}
      breadcrumbs={breadcrumbs}
    >
      <NewsTableHeader />
      <NewsTableBody />
    </BasicTableStructure>
  );
};

export default NewsTable;
