import { TableBody } from "@mui/material";
import { useSelector } from "react-redux";
import { selectNews } from "../../../../../store/selectors/news.selector";
import NewsTableRow from "./NewsTableRow/NewsTableRow";

const NewsTableBody = () => {
  const news = useSelector(selectNews);

  return (
    <TableBody>
      {news.length > 0 &&
        news.map((row) => <NewsTableRow key={row.customId} row={row} />)}
    </TableBody>
  );
};

export default NewsTableBody;
