import BasicTableStructure from "../../BasicTableStructure/BasicTableStructure";
import PartnersTableHeader from "./PartnersTableHeader/PartnersTableHeader";
import PartnersTableBody from "./PartnersTableBody/PartnersTableBody";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/partners",
    label: "Partners",
  },
];

const PartnersTable = () => {
  return (
    <BasicTableStructure
      linkToNew={"partners"}
      addNew={"partners"}
      breadcrumbs={breadcrumbs}
    >
      <PartnersTableHeader />
      <PartnersTableBody />
    </BasicTableStructure>
  );
};

export default PartnersTable;
