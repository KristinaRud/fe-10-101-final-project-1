import { Box, TextField, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import ImageUpload from "../ImageUpload/ImageUpload";

const ProductSliderField = ({
  setFieldValue,
  description,
  setDescription,
  productSlide,
}) => {
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setLoading(true);
      const data = new FormData();
      data.append("file", acceptedFiles[0]);
      data.append("upload_preset", "wzzc5bs7");
      data.append("cloud_name", "djhfyftot");
      fetch("https://api.cloudinary.com/v1_1/djhfyftot/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const { title, slideNumber } = productSlide;
          setDescription((prev) => {
            return prev.map((item) => {
              if (item.slideNumber === slideNumber) {
                return { ...item, title, image: data.url };
              }
              return item;
            });
          });
          setLoading(false);
        })
        .catch((err) => console.log(err));
    },
    [productSlide, setDescription],
  );

  useEffect(() => {
    setFieldValue("description", description);
  }, [description, setFieldValue]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const getBorderColor = () => {
    if (isDragAccept) {
      return "#00e676";
    }
    if (isDragReject) {
      return "#ff1744";
    }
    if (isDragActive) {
      return "#2979ff";
    }
    return "#0156FF";
  };

  const handleDeleteImage = () => {
    const { title, slideNumber } = productSlide;
    setDescription((prev) => {
      return prev.map((item) => {
        if (item.slideNumber === slideNumber) {
          return { ...item, title, image: "" };
        }
        return item;
      });
    });
  };

  const handleChange = (e) => {
    const { slideNumber } = productSlide;
    setDescription((prev) => {
      return prev.map((item) => {
        if (item.slideNumber === slideNumber) {
          return { ...item, title: e.target.value };
        }
        return item;
      });
    });
  };

  return (
    <Box sx={{ border: "1px solid #A2A6B0", padding: "10px", width: "100%" }}>
      <Typography variant={"body2"}>
        Slide {productSlide.slideNumber}
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={2}
        sx={{ width: "100%" }}
      >
        <TextField
          sx={{ width: "100%" }}
          variant="standard"
          type="text"
          label="Title"
          name="title"
          value={productSlide.title}
          onChange={handleChange}
        />
        <ImageUpload
          getInputProps={getInputProps}
          getBorderColor={getBorderColor}
          getRootProps={getRootProps}
          loading={loading}
          isDragAccept={isDragAccept}
          imgUrl={productSlide.image}
          handleDeleteImage={handleDeleteImage}
        />
      </Box>
    </Box>
  );
};

ProductSliderField.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  description: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setDescription: PropTypes.func.isRequired,
  productSlide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slideNumber: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductSliderField;
