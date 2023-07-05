import { Box, CircularProgress, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allCategoriesSelector } from "../../../../../store/selectors/catalog.selector";
import { selectNews } from "../../../../../store/selectors/news.selector";

const CategoryImage = ({ setFieldValue, imgUrl, setImgUrl }) => {
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const data = useSelector(allCategoriesSelector);
  const news = useSelector(selectNews);

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
          setImgUrl(data.url);
          setLoading(false);
          setFieldValue("imgUrl", data.url);
        })
        .catch((err) => console.log(err));
    },
    [setFieldValue, setImgUrl],
  );

  useEffect(() => {
    if (params?.category) {
      const category = data.find((item) => item.id === params.category);
      setImgUrl(category?.imgUrl);
      setFieldValue("imgUrl", category?.imgUrl);
      setFieldValue("name", category?.name);
    }

    if (params?.news) {
      const selectNews = news.find((item) => item.customId === params.news);
      setImgUrl(selectNews?.imageUrl);
      setFieldValue("imgUrl", selectNews?.imageUrl);
      setFieldValue("customId", selectNews?.customId);
    }
  }, [params, data, setFieldValue, setImgUrl, news]);
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

  return (
    <Box
      {...getRootProps()}
      sx={{
        width: "400px",
        height: "150px",
        border: "2px dashed #0156FF",
        borderColor: getBorderColor(),
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        padding: 1,
        cursor: "pointer",
        backgroundImage: imgUrl && `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 2,
      }}
    >
      <input {...getInputProps()} />
      {loading && <CircularProgress color={"secondary"} />}
      {!imgUrl && !loading && (
        <Typography
          variant={"body1"}
          sx={{
            color: isDragAccept ? "#00e676" : "#0156FF",
            fontWeight: 600,
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Drag and drop image here, or click to select image
        </Typography>
      )}
    </Box>
  );
};

CategoryImage.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  imgUrl: PropTypes.string,
  setImgUrl: PropTypes.func.isRequired,
};

export default CategoryImage;
