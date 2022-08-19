import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";
import {HashRouter} from "react-router-dom";

function App() {
    return (
            <HashRouter>
            <Header/>
            <AllRoutes/>
            <Footer/>
            </HashRouter>
    );
}
export default App;
