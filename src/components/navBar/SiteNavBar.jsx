import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GiDuck, GiHouse } from "react-icons/gi";
import './SiteNavBar.css'


const SiteNavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)){
                setMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handler )

        return() => {
            document.removeEventListener("mousedown", handler )
        }
    });

  return (
    <nav ref={ menuRef }>
        <div className="home">
            <a href="https://alsolecki.com/">
                <GiHouse />
            </a>
        </div>
        <div className="menu"  onClick={() => { setMenuOpen(!menuOpen) }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={ menuOpen ? "open" : "unopen"} >
            <li><Link to="https://exhibitgallery.netlify.app">ExhibitGallery</Link></li>
            <li><Link to="https://foodclock.netlify.app">FoodClock</Link></li>
            <li><Link to="https://thebarnyard.netlify.app/">BarnYard</Link></li>
            <li> 
                <a href="https://babyouterspace.netlify.app/">
                    <GiDuck />
                </a>  
            </li>
        </ul>
    </nav>
  )
}

export default SiteNavBar;