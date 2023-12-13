import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
    const isCharactersPage = location.pathname === '/characters';

    const navigate = useNavigate();
    useEffect(() => {
        navigate('/home');
    }, []);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    }
    return (
        <>
            <div className="header">
                <img src="/images/One-Piece-Embleme.png" style={{height: '100px', width: "250px"}} alt=""/>
                <ul className="header-ul">
                    <li onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} className={`characters-dropdown`}>
                        <Link to="/characters">Персонажи</Link>
                        {isCharactersPage && isDropdownOpen && (
                            <ul className="dropdown">
                                <li><a href="#mugiwaras" style={{fontSize: "14px"}}>Мугивары</a></li>
                                <li><a href="#warlords" style={{fontSize: "14px"}}>Шичибукаи</a></li>
                                <li><a href="#yonko" style={{fontSize: "14px"}}>Йонко</a></li>
                                <li><a href="#marine" style={{fontSize: "14px"}}>Морской Дозор</a></li>
                            </ul>
                        )}
                    </li>
                    <Link to="/arcs"><li><a href="">Арки</a></li></Link>
                    <Link to="/home"><li><a href="">На Главную</a></li></Link>
                </ul>
            </div>
            <hr/>
        </>
    )
}


