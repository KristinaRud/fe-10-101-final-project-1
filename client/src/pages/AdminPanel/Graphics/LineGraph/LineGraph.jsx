/* eslint-disable react/forbid-prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import style from "./LineGraph.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Daily earnings ₴",
    },
  },
};

const LineGraph = ({ dataSum, labels }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Earn ₴",
        data: dataSum,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div className={style.line}>
      <Line options={options} data={data} />
    </div>
  );
};

LineGraph.propTypes = {
  dataSum: PropTypes.array,
  labels: PropTypes.array,
};

export default LineGraph;
