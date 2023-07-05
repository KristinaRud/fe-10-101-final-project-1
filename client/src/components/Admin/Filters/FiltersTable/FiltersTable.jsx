import { useState } from "react";
import FiltersTableHeader from "./FiltersTableHeader/FiltersTableHeader";
import FiltersTableBody from "./FiltersTableBody/FiltersTableBody";
import BasicTableStructure from "../../BasicTableStructure/BasicTableStructure";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/filters",
    label: "Filters",
  },
];

const FiltersTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("type");
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <BasicTableStructure
      linkToNew={"filters"}
      addNew={"filter"}
      breadcrumbs={breadcrumbs}
    >
      <FiltersTableHeader
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
      />
      <FiltersTableBody orderBy={orderBy} order={order} />
    </BasicTableStructure>
  );
};

export default FiltersTable;
