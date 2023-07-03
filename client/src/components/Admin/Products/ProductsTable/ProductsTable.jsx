import { useSelector } from "react-redux";
import ProductsTableHeader from "./ProductsTableHeader/ProductsTableHeader";
import ProductsTableBody from "./ProductsTableBody/ProductsTableBody";
import ProductTableFooter from "./ProductTableFooter/ProductTableFooter";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import BasicTableStructure from "../../BasicTableStructure/BasicTableStructure";

const breadcrumbs = [
  {
    url: "/admin",
    label: "Dashboard",
  },
  {
    url: "/admin/products",
    label: "Products",
  },
];

const ProductsTable = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <BasicTableStructure
      linkToNew={"products"}
      addNew={"product"}
      breadcrumbs={breadcrumbs}
      toggleBtn={<ToggleBtn />}
    >
      <ProductsTableHeader />
      {Object.keys(products).length > 0 && (
        <>
          <ProductsTableBody data={products.products} />
          <ProductTableFooter productsQuantity={products.productsQuantity} />
        </>
      )}
    </BasicTableStructure>
  );
};

export default ProductsTable;
