import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterTagItem from "./FilterTagItem/FilterTagItem";
import s from "./FilterTagList.module.scss";
import { deleteAllQueryFilters } from "../../utils/queryParams/deleteAllQueryFilters";
import { urlParser } from "../../utils/queryParams/urlParser";

const FilterTagList = () => {
  const [filtersData, setFiltersData] = useState(urlParser() || []);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();

  useEffect(() => {
    setFiltersData(urlParser() || []);
  }, [location.search]);

  const renderOptions = (filter) => {
    if (filter.name !== "maxPrice" && filter.name !== "minPrice") {
      return filter.value.map((value) => (
        <FilterTagItem key={value} title={value} name={filter.name} />
      ));
    }
  };

  const renderPrice = () => {
    const maxPrice = searchParams.get("maxPrice");
    const minPrice = searchParams.get("minPrice");
    if (maxPrice && minPrice) {
      return <FilterTagItem title={`${minPrice} - ${maxPrice}`} name="price" />;
    }
  };
  return (
    <div>
      {filtersData.length > 0 && (
        <div className={s.wrapper}>
          {filtersData.map((filter) => renderOptions(filter))}
          {renderPrice()}
          <Button
            variant="outlined"
            className={s.btn}
            onClick={() =>
              deleteAllQueryFilters(
                filtersData,
                searchParams,
                navigate,
                dispatch,
              )
            }
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterTagList;
