import PropTypes from "prop-types";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { formatString } from "../../../../../../utils/string/formatString";

const ProductsListCharacteristics = ({ obj }) => {
  return (
    <List>
      <Typography variant={"body1"} fontWeight={500}>
        Characteristics:
      </Typography>
      <Grid container spacing={1}>
        {Object.keys(obj).map((key) =>
          obj[key] ? (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={key}
              sx={{ paddingLeft: "0 !important", paddingTop: "0 !important" }}
            >
              <ListItem sx={{ padding: "0 0 0 16px" }}>
                <ListItemText
                  primaryTypographyProps={{
                    component: "span",
                    sx: {
                      fontSize: "0.875rem",
                    },
                  }}
                  primary={formatString(key)}
                  secondary={obj[key]}
                />
              </ListItem>
            </Grid>
          ) : null,
        )}
      </Grid>
    </List>
  );
};
ProductsListCharacteristics.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  obj: PropTypes.object.isRequired,
};
export default ProductsListCharacteristics;
