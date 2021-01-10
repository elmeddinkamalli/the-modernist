import React, { useState } from 'react';
import CustomStyle from './custom.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HeaderContainer,
        TopStrip,
        NavContainer,
        NavLeft,
        NavRight,
        NavUl } from './HeaderElements';

const Header = () => {
    const [menu, setMenu] = useState(false);
    function toggleMenu(){
        setMenu(!menu);
    }
    return (
        <>  
            <HeaderContainer>
                <TopStrip />
                <NavContainer>
                <NavLeft>
                    <span className="logoPrimary">The Modernist</span>
                    <span className="logoSecondary">Free PSD Website Template</span>
                </NavLeft>
                <FaBars onClick={toggleMenu} className="bars" color="white" />
                <NavRight menu={menu}>
                    <NavUl>
                        <FaTimes onClick={toggleMenu} className="closeIcon" color="white" />
                        <li className="navlist"><a className="navLink active" href="index">Home</a></li>
                        <li className="navlist"><a className="navLink" href="index">Style Demo</a></li>
                        <li className="navlist"><a className="navLink" href="index">Full Width</a></li>
                        <li className="navlist"><a className="navLink" href="index">Dropdown</a></li>
                        <li className="navlist"><a className="navLink" href="index">Portfolio</a></li>
                        <li className="navlist"><a className="navLink" href="index">Gallery</a></li>
                    </NavUl>
                </NavRight>
                </NavContainer>
            </HeaderContainer>
        </>
    )
}

export default Header
