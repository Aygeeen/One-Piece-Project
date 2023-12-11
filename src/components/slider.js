import React, {useState} from "react";
import mugiwaras from "./mugiwaras";
import warlords from "./warlords";
import yonko from "./yonko";
import marine from "./marine";

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);
    const [currentSlide3, setCurrentSlide3] = useState(0);
    const [currentSlide4, setCurrentSlide4] = useState(0);
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? mugiwaras.length - 1 : prevSlide - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === mugiwaras.length - 1 ? 0 : prevSlide + 1));
    };
    const prevSlide2 = () => {
        setCurrentSlide2((prevSlide) => (prevSlide === 0 ? warlords.length - 1 : prevSlide - 1));
    };
    const nextSlide2 = () => {
        setCurrentSlide2((prevSlide) => (prevSlide === warlords.length - 1 ? 0 : prevSlide + 1));
    };
    const prevSlide3 = () => {
        setCurrentSlide3((prevSlide) => (prevSlide === 0 ? yonko.length - 1 : prevSlide - 1));
    };
    const nextSlide3 = () => {
        setCurrentSlide3((prevSlide) => (prevSlide === yonko.length - 1 ? 0 : prevSlide + 1));
    };
    const prevSlide4 = () => {
        setCurrentSlide4((prevSlide) => (prevSlide === 0 ? marine.length - 1 : prevSlide - 1));
    };
    const nextSlide4 = () => {
        setCurrentSlide4((prevSlide) => (prevSlide === marine.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <h2 id="mugiwaras" className="characters">Пираты Соломенной Шляпы <img src="/images/mugiwara.png" alt="#"
                                                                                   className="mugiwara"/>
            </h2>
            <div className="slider">
                <div className="content">

                    <img src="/images/right_long_arrow_icon_214373.png" alt="" className="img-right"
                         style={{width: "50px", marginLeft: '15px', cursor: 'pointer'}} onClick={prevSlide}/>
                    <img src={mugiwaras[currentSlide].image} alt="" style={mugiwaras[currentSlide].uniqueStyles}/>
                    <div className="text-content">
                        <h2>{mugiwaras[currentSlide].title}</h2>
                        <p>{mugiwaras[currentSlide].description}</p>
                        <h3>{mugiwaras[currentSlide].price}</h3>
                    </div>
                    <img src="/images/right_long_arrow_icon_214373.png" alt=""
                         style={{width: "50px", cursor: 'pointer'}} onClick={nextSlide}/>
                </div>
            </div>
            {/*-----------------------------------------------------------------------*/}
            <hr/>
            <h2 id="warlords" className="characters">Шичибукаи<img src="/images/government.png" alt="#"
                                                                   className="warlords"/></h2>
            <div className="slider">
                <div className="content">
                    <img src="/images/right_long_arrow_icon_214373.png" alt="" className="img-right"
                         style={{width: "50px", marginLeft: '15px', cursor: 'pointer'}} onClick={prevSlide2}/>
                    <img src={warlords[currentSlide2].image} alt="" style={warlords[currentSlide2].uniqueStyles}/>
                    <div className="text-content">
                        <h2>{warlords[currentSlide2].title}</h2>
                        <p>{warlords[currentSlide2].description}</p>
                        <h3>{warlords[currentSlide2].price}</h3>
                    </div>
                    <img src="/images/right_long_arrow_icon_214373.png" alt=""
                         style={{width: "50px", cursor: 'pointer'}} onClick={nextSlide2}/>
                </div>
            </div>
            {/*------------------------------------------------------------------------------------------*/}
            <hr/>
            <h2 id="yonko" className="characters">Йонко<img src="/images/yonko.png" alt="#" className="warlords"/></h2>
            <div className="slider">
                <div className="content">
                    <img src="/images/right_long_arrow_icon_214373.png" alt="" className="img-right"
                         style={{width: "50px", marginLeft: '15px', cursor: 'pointer'}} onClick={prevSlide3}/>
                    <img src={yonko[currentSlide3].image} alt="" style={yonko[currentSlide3].uniqueStyles}/>
                    <div className="text-content">
                        <h2>{yonko[currentSlide3].title}</h2>
                        <p>{yonko[currentSlide3].description}</p>
                        <h3>{yonko[currentSlide3].price}</h3>
                    </div>
                    <img src="/images/right_long_arrow_icon_214373.png" alt=""
                         style={{width: "50px", cursor: 'pointer'}} onClick={nextSlide3}/>
                </div>
            </div>
            {/*------------------------------------------------------------------------------------------*/}
            <hr/>
                <h2 id="marine" className="characters">Морские Дозорные<img src="/images/marine.png" alt="#" className="marine"/></h2>
            <div className="slider">
                <div className="content">
                    <img src="/images/right_long_arrow_icon_214373.png" alt="" className="img-right"
                         style={{width: "50px", marginLeft: '15px', cursor: 'pointer'}} onClick={prevSlide4}/>
                    <img src={marine[currentSlide4].image} alt="" style={marine[currentSlide4].uniqueStyles}/>
                    <div className="text-content">
                        <h2>{marine[currentSlide4].title}</h2>
                        <p>{marine[currentSlide4].description}</p>
                        <h3>{marine[currentSlide4].price}</h3>
                    </div>
                    <img src="/images/right_long_arrow_icon_214373.png" alt=""
                         style={{width: "50px", cursor: 'pointer'}} onClick={nextSlide4}/>
                </div>
            </div>
        </>
    )
}