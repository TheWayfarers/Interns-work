import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { TimerProvider } from "./context/TimerContext";

import "./index.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TimerProvider>
            <App />
        </TimerProvider>
    </StrictMode>
);