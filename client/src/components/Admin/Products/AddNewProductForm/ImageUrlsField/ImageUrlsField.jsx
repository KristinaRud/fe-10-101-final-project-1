import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";
import ImageUpload from "../ImageUpload/ImageUpload";

const ImageUrlsField = ({
  setFieldValue,
  imageUrls,
  setImageUrls,
  imageNumber,
}) => {
  const [loading, setLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);

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
          setImageUrls((prev) => {
            return prev.map((item) => {
              if (item.imageNumber === imageNumber) {
                return { ...item, url: data.url };
              }
              return item;
            });
          });
          setLoading(false);
        })
        .catch(() => setLoading(true));
    },
    [imageNumber, setImageUrls],
  );

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
    setImageUrls((prev) => {
      return prev.map((item) => {
        if (item.imageNumber === imageNumber) {
          return { ...item, url: "" };
        }
        return item;
      });
    });
    setImgUrl(null);
  };

  useEffect(() => {
    const imageUrlsToDB = imageUrls.map((item) => !!item.url && item.url);
    imageUrls.forEach((item) => {
      if (item.imageNumber === imageNumber) {
        setImgUrl(item.url);
      }
    });
    setFieldValue("imageUrls", imageUrlsToDB);
  }, [imageNumber, imageUrls, setFieldValue]);

  return (
    <ImageUpload
      imgUrl={imgUrl}
      getInputProps={getInputProps}
      getRootProps={getRootProps}
      getBorderColor={getBorderColor}
      isDragActive={isDragActive}
      isDragAccept={isDragAccept}
      isDragReject={isDragReject}
      loading={loading}
      handleDeleteImage={handleDeleteImage}
    />
  );
};

ImageUrlsField.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
  imageUrls: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      imageNumber: PropTypes.number.isRequired,
    }),
  ).isRequired,
  setImageUrls: PropTypes.func.isRequired,
  imageNumber: PropTypes.number.isRequired,
};

export default ImageUrlsField;
