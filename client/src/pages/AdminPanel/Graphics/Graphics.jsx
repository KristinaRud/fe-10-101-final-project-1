/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
// попередні імпорти та код...
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

const numberOfCategories = ({ categories }, category) => {
  category[categories] += 1;
};

const Graphics = () => {
  const { orders } = useSelector((state) => state.orders);
  const catalogs = useSelector(allCategoriesSelector);
  const { isLoading } = useSelector(allCategoriesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    if (catalogs?.length > 0 && orders?.orders?.length > 0) {
      const updatedLabels = [];
      const updatedDatasets = [];

      orders?.orders?.forEach((el) => {
        const category = catalogs.reduce(
          // eslint-disable-next-line no-return-assign, prettier/prettier
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

        const index = updatedLabels.findIndex((d) => d === day);
        if (index === -1) {
          updatedLabels.push(day);
        }

        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        console.log(category);
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const key in category) {
          const datasetIndex = updatedDatasets.findIndex(
            (d) => d.label === key,
          );
          if (index === -1 && datasetIndex === -1) {
            updatedDatasets.push({
              label: key,
              data: [category[key]],
              backgroundColor: `rgba(${Math.floor(
                Math.random() * 256,
              )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256,
              )}, 0.5)`,
            });
            // eslint-disable-next-line no-dupe-else-if
          } else if (
            index !== -1 &&
            datasetIndex !== -1 &&
            updatedDatasets[datasetIndex].data.findIndex(
              (d) => d === category[key],
            ) === -1
          ) {
            updatedDatasets[datasetIndex].data.push(category[key]);
          }
        }
      });

      setLabels(updatedLabels);
      setDatasets(updatedDatasets);
    }
  }, [catalogs, orders]);

  console.log(labels, datasets);
  const data = {
    labels,
    datasets,
  };

  if (isLoading || (!catalogs?.length > 0 && !orders?.orders?.length > 0)) {
    return (
      <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!data) {
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
