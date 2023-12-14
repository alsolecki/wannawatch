import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './SiteNavBar.css'
import DropdownDev from './DropdownDev.jsx'
import arslogo from './arsdesign-logo1.svg'

const SiteNavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [devSubMenuOpen, setDevSubMenuOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler)
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    });

    return (
        <nav ref={menuRef}>
            <div className="home">
                <a href="https://alsolecki.com/">
                    <img src={arslogo} alt="ars design logo" style={{height: '84px', marginLeft: '-0.75rem'}}/>
                </a>
            </div>
            <div className="menu" onClick={() => { setMenuOpen(!menuOpen) }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : "unopen"} >

                <li><Link to="https://alsolecki.com/">Home</Link></li>

                <li><Link to="https://solecki-exhibit-portfolio.netlify.app/">Exhibits</Link></li>

                <li
                    onMouseEnter={() => setDevSubMenuOpen(true)}
                    onMouseLeave={() => setDevSubMenuOpen(false)}
                >
                     {devSubMenuOpen && <DropdownDev devSubMenuOpen="devSubMenuOpen" setDevSubMenuOpen="setDevSubMenuOpen" />}
                    <a href="/">
                        WebDev
                    </a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default SiteNavBar;