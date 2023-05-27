import { Button } from "@mui/material";
import FilterTagItem from "./FilterTagItem/FilterTagItem";
import s from "./FilterTagList.module.scss";

const FilterTagList = () => {
  const filters = [
    { name: "filter1", counter: 1 },
    { name: "filter2", counter: 2 },
  ]; // TODO: get filters from redux store

  const handleDeleteAllFilters = () => {};
  return (
    <div>
      {filters.length > 0 && (
        <div className={s.wrapper}>
          {filters.map((filter) => (
            <FilterTagItem
              key={filter.name}
              title={filter.name}
              counter={filter.counter}
            />
          ))}
          <Button
            variant="outlined"
            className={s.btn}
            onClick={handleDeleteAllFilters}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterTagList;
