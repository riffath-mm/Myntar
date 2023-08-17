import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Product from "./Pages/Product";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Practices from "./Components/Practices";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<Practices />}>
                    <Route index element={<Product />} />
                </Route>
            </Routes>
            {/* <Header /> */}
        </div>
    );
}

export default App;
