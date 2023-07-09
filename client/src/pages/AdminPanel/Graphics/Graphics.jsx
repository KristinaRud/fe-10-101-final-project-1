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
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Container, Box, CircularProgress } from "@mui/material";
import { allCategoriesSelector } from "../../../store/selectors/catalog.selector";
import { fetchCategories } from "../../../store/actionCreator/catalog.actionCreator";
import PieGraph from "./PieGraph/PieGraph";
import LineGraph from "./LineGraph/LineGraph";
import style from "./Graphics.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Sold goods by category per day",
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
  const [countAuth, setCountAuth] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    if (catalogs?.length > 0 && orders?.orders?.length > 0) {
      const updatedLabels = [];
      const updatedDatasets = [];
      let countAuthorizeCustom = 0;
      const price = [];
      orders?.orders?.forEach((el) => {
        countAuthorizeCustom =
          el.customerId !== undefined
            ? countAuthorizeCustom + 1
            : countAuthorizeCustom;
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

        orders?.orders?.forEach((el) => {
          updatedLabels?.forEach((d, index) => {
            const dayCompare = el.date.replace(/T.*/, "");
            if (
              d === dayCompare &&
              price.findIndex((d) => d === price[index]) !== -1
            ) {
              price[index] += el.totalSum;
            } else if (
              d === dayCompare &&
              price.findIndex((d) => d === price[index]) === -1
            ) {
              price.push(el.totalSum);
            }
          });
        });
      });

      setLabels(updatedLabels);
      setDatasets(updatedDatasets);
      setCountAuth(countAuthorizeCustom);
      setTotalSum(price);
    }
  }, [catalogs, orders]);

  const data = {
    labels,
    datasets,
  };

  return (
    <Container>
      {(isLoading ||
        (labels.length === 0 && datasets.length === 0 && totalSum === 0)) && (
        <Box sx={{ margin: "40px" }} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {!isLoading &&
        labels.length > 0 &&
        datasets.length > 0 &&
        totalSum.length > 0 && (
          <>
            <div className={style.group}>
              <div className={style.bar}>
                <Bar options={options} data={data} />
              </div>
              <PieGraph
                // eslint-disable-next-line no-unsafe-optional-chaining
                quantity={+orders?.ordersQuantity}
                countAuth={countAuth}
              />
            </div>
            <LineGraph dataSum={totalSum} labels={labels} />
          </>
        )}
    </Container>
  );
};

export default Graphics;
