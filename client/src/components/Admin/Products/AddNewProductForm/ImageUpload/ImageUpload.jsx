import { Box, CircularProgress, IconButton, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PropTypes from "prop-types";

const ImageUpload = ({
  getRootProps,
  getBorderColor,
  imgUrl,
  handleDeleteImage,
  getInputProps,
  loading,
  isDragAccept,
}) => {
  return (
    <Box
      {...getRootProps()}
      sx={{
        width: "100px",
        height: "100px",
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
      <IconButton
        color={"error"}
        size={"small"}
        sx={{
          position: "absolute",
          top: "-8px",
          right: "-6px",
          backgroundColor: "#fff",
          width: "20px",
          height: "20px",
          zIndex: 4,
        }}
        onClick={handleDeleteImage}
      >
        <HighlightOffIcon />
      </IconButton>
      <input {...getInputProps()} />
      {loading && <CircularProgress color={"secondary"} />}
      {!imgUrl && !loading && (
        <Typography
          variant={"body1"}
          sx={{
            color: isDragAccept ? "#00e676" : "#0156FF",
            fontSize: "10px",
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

ImageUpload.propTypes = {
  getRootProps: PropTypes.func,
  getBorderColor: PropTypes.func,
  imgUrl: PropTypes.string,
  handleDeleteImage: PropTypes.func,
  getInputProps: PropTypes.func,
  loading: PropTypes.bool,
  isDragAccept: PropTypes.bool,
};

export default ImageUpload;
