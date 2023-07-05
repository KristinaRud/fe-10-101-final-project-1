import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { parseBreadcrumbUrl } from "../../utils/queryParams/parseBreadcrumbUrl";
import s from "./BreadcrumbsApp.module.scss";
import { formatString } from "../../utils/string/formatString";
import { replaceDashWithSpace } from "../../utils/string/replaceDashWithSpace";

const BreadcrumbsApp = ({ breadcrumbsCustomData, sx }) => {
  const location = useLocation();
  const { pathname } = location;
  const breadcrumbsData = breadcrumbsCustomData || parseBreadcrumbUrl(pathname);

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className={s.list}
        sx={{ padding: "20px 20px 0", ...sx }}
      >
        {breadcrumbsData.map(({ url, label }) => (
          <Link to={url} key={label} className={s.link}>
            {replaceDashWithSpace(formatString(label))}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadcrumbsApp;

BreadcrumbsApp.propTypes = {
  breadcrumbsCustomData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  ),
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
};
