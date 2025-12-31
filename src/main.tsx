import { createRoot } from "react-dom/client";
import "@fontsource/stack-sans-notch/400.css";
import "@fontsource/stack-sans-notch/500.css";
import "@fontsource/stack-sans-notch/600.css";
import "@fontsource/stack-sans-notch/700.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
