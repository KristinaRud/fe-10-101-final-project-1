import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";
import styles from "./PieGraph.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Which customers shopped",
    },
  },
};

const PieGraph = ({ quantity, countAuth }) => {
  const data = {
    labels: ["Authorize", "Non authorize"],
    datasets: [
      {
        label: "# Quality",
        // eslint-disable-next-line no-unsafe-optional-chaining
        data: [countAuth, quantity - countAuth],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.pie}>
      <Pie data={data} options={options} />
    </div>
  );
};

PieGraph.propTypes = {
  quantity: PropTypes.number,
  countAuth: PropTypes.number,
};

export default PieGraph;
