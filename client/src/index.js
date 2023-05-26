import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/reset.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);