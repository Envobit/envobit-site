import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "react-phone-number-input/style.css";
import "./phone-input.css";

createRoot(document.getElementById("root")!).render(<App />);
