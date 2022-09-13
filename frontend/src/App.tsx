import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllRoutes from "./components/AllRoutes";
import {HashRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <HashRouter>
                <Header/>
                <AllRoutes/>
                <Footer/>
            </HashRouter>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
</>
    );
}
export default App;
