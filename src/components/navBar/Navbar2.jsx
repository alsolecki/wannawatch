import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import toySVG from "./toy-duck-icon.svg";
import homeSVG from "./home-icon.svg";
import './Navbar2.css'


const Navbar2 = () => {
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
            <img src={ homeSVG } alt="Home Icon" width="24px" height="20px"/></a>
        </div>
            {/* hamburger */}
            <div className="menu"  onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        <ul className={ menuOpen ? "open" : "unopen"} >
            <li><Link to="https://exhibitgallery.netlify.app">ExhibitGallery</Link></li>
            <li><Link to="https://foodclock.netlify.app">FoodClock</Link></li>
            <li><Link to="https://thebarnyard.netlify.app/">BarnYard</Link></li>
            <li></li>
            <li> 
                <a href="https://babyouterspace.netlify.app/">
                {/* <DuckIcon /> */}
                <img src={ toySVG } alt="Home Icon" width="24px" height="20px"/>
                </a>  
            </li>
        </ul>
    </nav>
  )
}



export default Navbar2