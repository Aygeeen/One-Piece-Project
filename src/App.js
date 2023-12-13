import React from "react";
import "./index.css"
import Header from "./components/header";
import Slider from "./components/slider";
import {
    Route,
    BrowserRouter,
    Routes,
} from "react-router-dom";
import Home from "./components/Home";


export default function App() {
    return (

        <>
            <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <Routes>
                        <Route path="/characters" element={<Slider/>}/>
                        <Route path="/arcs" element={<arcs/>}/>
                        <Route path="/home" element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}