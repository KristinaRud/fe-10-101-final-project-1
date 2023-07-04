import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import CharacteristicsItem from "./CharacteristicsItem";
import IconAdd from "../IconAdd/IconAdd";
import AddNewKeyCharacteristic from "./AddNewKeyCharacteristic";

const CharacteristicsField = ({
  characteristics,
  setCharacteristics,
  products,
  category,
  setFieldValue,
}) => {
  const [openNewCharacteristic, setOpenNewCharacteristic] = useState(false);
  const handleAddCharacteristic = () => {
    setOpenNewCharacteristic(true);
  };
  const params = useParams();

  useEffect(() => {
    const productsCategory = products.filter(
      (item) => item.categories === category,
    );

    const initialCharacteristics = {};
    productsCategory.forEach((product) => {
      Object.keys(product.characteristics).forEach((characteristic) => {
        if (params?.product) {
          const editProduct = products.find(
            (item) => item.itemNo === params.product,
          );
          if (editProduct) {
            if (!editProduct.characteristics[characteristic]) {
              initialCharacteristics[characteristic] = "";
            } else {
              initialCharacteristics[characteristic] =
                editProduct.characteristics[characteristic];
            }
          }
        } else if (!initialCharacteristics[characteristic]) {
          initialCharacteristics[characteristic] = "";
        }
      });
    });
    setCharacteristics(initialCharacteristics);
  }, [products, category]);

  useEffect(() => {
    setFieldValue("characteristics", characteristics);
  }, [characteristics, setFieldValue]);

  return (
    <Box display="flex" flexDirection="column" gap={1} mt={1}>
      <Typography variant={"body2"}>Characteristics: *</Typography>
      <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={2}>
        {Object.keys(characteristics).map((item, index) => (
          <CharacteristicsItem
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            setCharacteristics={setCharacteristics}
            category={category}
            products={products}
            label={item}
            value={characteristics[item]}
          />
        ))}
      </Box>
      <IconAdd onClick={handleAddCharacteristic} />
      <AddNewKeyCharacteristic
        setCharacteristics={setCharacteristics}
        open={openNewCharacteristic}
        characteristics={characteristics}
        setOpen={setOpenNewCharacteristic}
      />
    </Box>
  );
};
CharacteristicsField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  characteristics: PropTypes.objectOf(PropTypes.string).isRequired,
  setCharacteristics: PropTypes.func.isRequired,
};
export default CharacteristicsField;
