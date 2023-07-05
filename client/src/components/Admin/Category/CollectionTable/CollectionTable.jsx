import { useState } from "react";
import { useSelector } from "react-redux";
import CollectionTableHeader from "./CollectionTableHeader/CollectionTableHeader";
import CollectionTableBody from "./CollectionTableBody/CollectionTableBody";
import { allCategoriesSelector } from "../../../../store/selectors/catalog.selector";
import BasicTableStructure from "../../BasicTableStructure/BasicTableStructure";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/categories",
    label: "Categories",
  },
];

const CollectionTable = () => {
  const data = useSelector(allCategoriesSelector);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <BasicTableStructure
      breadcrumbs={breadcrumbs}
      linkToNew={"categories"}
      addNew={"category"}
    >
      <CollectionTableHeader
        orderBy={orderBy}
        order={order}
        onRequestSort={handleRequestSort}
      />
      <CollectionTableBody data={data} orderBy={orderBy} order={order} />
    </BasicTableStructure>
  );
};

export default CollectionTable;
