import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const EditOptions = ({
  setFieldValue,
  products,
  setImageUrls,
  setDescription,
  setCompleteSet,
}) => {
  const params = useParams();

  useEffect(() => {
    if (params?.product) {
      const editProduct = products.find(
        (item) => item.itemNo === params.product,
      );
      if (editProduct) {
        const exclude = [
          "imageUrls",
          "description",
          "completeSet",
          "characteristics",
        ];
        Object.keys(editProduct).forEach((key) => {
          if (!exclude.includes(key)) {
            setFieldValue(key, editProduct[key]);
          }
        });

        const editImageUrls = [];
        editProduct.imageUrls.forEach((item, index) => {
          editImageUrls.push({ url: item, imageNumber: index + 1 });
        });
        setImageUrls(editImageUrls);

        const editDescription = [];
        editProduct.description.forEach((item, index) => {
          editDescription.push({
            title: item.title,
            image: item.image,
            slideNumber: index + 1,
          });
        });
        setDescription(editDescription);

        const editCompleteSet = [];
        editProduct.completeSet.forEach((item) => {
          editCompleteSet.push(item);
        });
        setCompleteSet(editCompleteSet);
      }
    }
  }, [params.product]);
  return <Box />;
};

EditOptions.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setImageUrls: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setCompleteSet: PropTypes.func.isRequired,
};

export default EditOptions;
