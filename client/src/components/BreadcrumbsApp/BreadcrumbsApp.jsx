import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { parseBreadcrumbUrl } from "../../utils/queryParams/parseBreadcrumbUrl";
import s from "./BreadcrumbsApp.module.scss";
import { formatString } from "../../utils/string/formatString";

const BreadcrumbsApp = () => {
  const location = useLocation();
  const { pathname } = location;
  const breadcrumbsData = parseBreadcrumbUrl(pathname);

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className={s.list}
      >
        {breadcrumbsData.map(({ url, label }) => (
          <Link to={url} key={label} className={s.link}>
            {formatString(label)}
          </Link>
        ))}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadcrumbsApp;
