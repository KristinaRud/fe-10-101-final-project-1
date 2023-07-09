/* eslint-disable no-return-assign */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import { allCategoriesSelector } from "../../../store/selectors/catalog.selector";
import { fetchCategories } from "../../../store/actionCreator/catalog.actionCreator";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const Graphics = () => {
  const { orders } = useSelector((state) => state.orders);
  const catalogs = useSelector(allCategoriesSelector);
  const { isLoading } = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, isLoading]);

  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);

  if (isLoading || (!catalogs?.length > 0 && !orders?.orders?.length > 0)) {
    return (
      <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  const numberOfCategories = ({ categories }, category) => {
    category[categories] += 1;
  };

  if (catalogs?.length > 0 && orders?.orders?.length > 0) {
    orders?.orders?.forEach((el) => {
      const category = catalogs.reduce(
        // eslint-disable-next-line no-sequences, prettier/prettier
        (catalogs, n) => ((catalogs[n.name] = 0), catalogs),
        {},
      );
      const day = el.date.replace(/T.*/, "");
      orders?.orders?.forEach((el) => {
        const dayCompare = el.date.replace(/T.*/, "");
        if (dayCompare === day) {
          el.products?.forEach(({ product }) => {
            numberOfCategories(product, category);
          });
        }
      });
      // category.day = day;
      // const index = labels?.some((d) => d === day);
      if (labels?.findIndex((d) => d === day) === -1) {
        setLabels((prev) => [...prev, day]);
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in category) {
          setDatasets((current) => {
            const dataSet = [...current];
            const index = dataSet?.findIndex((d) => d.label === key);
            if (index === -1) {
              dataSet.push({
                label: key,
                data: [category[key]],
                // eslint-disable-next-line prettier/prettier
                backgroundColor: `rgba(${Math.floor(
                  Math.random() * 256,
                )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                  Math.random() * 256,
                )}, 0.5)`,
              });
            } else {
              dataSet[index].data.push(category[key]);
            }
            return dataSet;
          });
        }
      }
      // const sortArr = arr.filter((it, index) => index === arr.indexOf(it = it.trim()));
    });
  }

  console.log(labels, datasets);
  const data = {
    labels,
    datasets,
  };

  if (!datasets && !labels) {
    return <div>Loading...</div>;
    // eslint-disable-next-line no-else-return
  } else {
    return (
      <Container>
        <Bar options={options} data={data} />
      </Container>
    );
  }
};

export default Graphics;
