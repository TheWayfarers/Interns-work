import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTimer } from "./context/TimerContext";

import Header from "./components/Header";
import Study from "./pages/Study";
import History from "./pages/History";
import Settings from "./pages/Settings";

import "./App.css";

function App() {

    const { state } = useTimer();

    return (
        <div className={state.darkMode ? "app dark" : "app"}>

            <div className="container">

                <Header />

                <main>

                    <Routes>

                        <Route
                            path="/"
                            element={<Study />}
                        />

                        <Route
                            path="/study"
                            element={<Study />}
                        />

                        <Route
                            path="/history"
                            element={<History />}
                        />

                        <Route
                            path="/settings"
                            element={<Settings />}
                        />

                    </Routes>

                </main>

                <footer>
                    <p>
                        Varshitha | 19 August 2026
                    </p>
                </footer>

            </div>

        </div>
    );
}

function AppWithRouter() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default AppWithRouter;