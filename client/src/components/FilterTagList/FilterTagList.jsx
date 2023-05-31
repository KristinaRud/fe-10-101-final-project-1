import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import FilterTagItem from "./FilterTagItem/FilterTagItem";
import s from "./FilterTagList.module.scss";
import { selectFilters } from "../../store/slices/filters.slice";
import { deleteAllQueryFilters } from "../../utils/deleteAllQueryFilters";

const FilterTagList = () => {
  const filtersData = useSelector(selectFilters);
  const query = filtersData.filters;
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();

  return (
    <div>
      {filtersData.filters && filtersData.filters.length > 0 && (
        <div className={s.wrapper}>
          {filtersData.filters.map((filter) => {
            return filter.value.map((value) => (
              <FilterTagItem key={value} title={value} name={filter.name} />
            ));
          })}
          <Button
            variant="outlined"
            className={s.btn}
            onClick={() =>
              deleteAllQueryFilters(query, searchParams, navigate, dispatch)
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
