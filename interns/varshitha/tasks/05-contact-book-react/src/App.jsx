import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import "./App.css";

import useContactStore from "./store/contactStore";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import EditContact from "./pages/EditContact";
import ContactDetails from "./pages/ContactDetails";

function App() {

    const fetchContacts =
        useContactStore((state) => state.fetchContacts);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/add"
                    element={<AddContact />}
                />

                <Route
                    path="/edit/:id"
                    element={<EditContact />}
                />

                <Route
                    path="/contact/:id"
                    element={<ContactDetails />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;