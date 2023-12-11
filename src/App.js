import React, {useState} from "react";
import "./index.css"
import Header from "./components/header";
import Slider from "./components/slider";

export default function App() {
    return (
        <>
            <div className="wrapper">
                <Header/>
                <Slider/>
            </div>
        </>
    )
}