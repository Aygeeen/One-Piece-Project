import React, {useState} from "react";
export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    }
    return (
        <>
            <div className="header">
                <img src="/images/One-Piece-Logo.png" style={{height: '118px', width: "290px"}} alt=""/>
                <ul className="header-ul">
                    <li onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} className="characters-dropdown">
                        <a href="">Персонажи</a>
                        {isDropdownOpen && (
                            <ul className="dropdown">
                                <li><a href="#mugiwaras" style={{fontSize: "15px"}}>Мугивары</a></li>
                                <li><a href="#warlords" style={{fontSize: "15px"}}>Шичибукаи</a></li>
                                <li><a href="#yonko" style={{fontSize: "15px"}}>Йонко</a></li>
                                <li><a href="#marine" style={{fontSize: "15px"}}>Морской Дозор</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="#">Сюжет</a></li>
                    <li><a href="#">История создания</a></li>
                </ul>
            </div>
            <hr/>
        </>
    )
}


