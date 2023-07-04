import { TextField } from "formik-mui";
import { Field } from "formik";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SliderPicker } from "react-color";
import convert from "color-convert";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatString } from "../../../../../utils/string/formatString";
import { selectColors } from "../../../../../store/selectors/colors.selector";
import { rgbParser } from "./rgbParser";

const ColorPickerApp = ({ setFieldValue }) => {
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [colorName, setColorName] = useState("Black");
  const colors = useSelector(selectColors);
  const params = useParams();

  const handleChangeComplete = (newColor) => {
    const cssValue = `rgb(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b})`;
    setColor(newColor.rgb);
    setFieldValue("cssValue", cssValue);
    const name = formatString(convert.hex.keyword(newColor.hex));
    setColorName(name);
    setFieldValue("name", name);
  };

  const handleBlur = (event) => {
    const name = event.target.value;
    let rgbColor = convert.keyword.rgb(name.trim().toLowerCase());
    if (rgbColor) {
      setColorName(name);
      setFieldValue("name", name);
    } else {
      rgbColor = convert.keyword.rgb("black");
      setColorName("Black");
      setFieldValue("name", "Black");
    }

    const cssValue = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
    setColor({ r: rgbColor[0], g: rgbColor[1], b: rgbColor[2] });
    setFieldValue("cssValue", cssValue);
  };

  const handleColorNameChange = (event) => {
    setColorName(event.target.value);
  };

  useEffect(() => {
    if (params?.filter && colors.length > 0) {
      colors.forEach((obj) => {
        if (obj._id === params.filter) {
          setColorName(obj.name);
          setColor(rgbParser(obj.cssValue));
        }
      });
    }
  }, [params, colors]);

  return (
    <>
      <Field
        variant="standard"
        component={TextField}
        name={"name"}
        value={colorName}
        type="text"
        label={"Name of color"}
        onChange={handleColorNameChange}
        onBlur={handleBlur}
        sx={{ marginBottom: "1rem" }}
      />
      <SliderPicker color={color} onChange={handleChangeComplete} />
    </>
  );
};
ColorPickerApp.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
};
export default ColorPickerApp;
