import {  useRef, useState } from "react";
import {  Link, useSearchParams } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/navbar.css";
import logo from "../Assets/logo.png"
import {  Icon } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

 const Navbar = () => {
   const [searchParams, setSearchParams] = useSearchParams();
   const initialParams = searchParams.getAll("category" || "color" || "gender");
   const [searchText, setSearchText] = useState(initialParams || "");



   const navRef = useRef();

   const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
   };

   const searchBar = useRef(null);

   const showSearch = () => {
      searchBar.current.classList.toggle("navSearch");
   };



   return (
      <header>
         <Link to="/">
            {" "}
            <img className="logo" src={logo} />{" "}
         </Link>

         <div className="secNav">
            <nav ref={navRef}>
               <Link to="/about">Gardening Practice</Link>
               <Link to="/men" className="about section"> Houseplants</Link>
               <Link to="/women">Perennials</Link>
               <Link to="/shop">Trees & Shrubs</Link>
               <Link to="/shop">More Plants</Link>
               <Link to="/shop">Topics</Link>

               <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                  <Icon as={FaTimes} />
               </button>
               {/* -------------------------------------------------------I added search here------------------------- */}
            </nav>
            <div className="navIcons">
               <input
                  className="beforeSearch"
                  ref={searchBar}
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchText(e.target.value)}
               />
               <SearchIcon onClick={showSearch} />
            </div>
            <button className="nav-btn" onClick={showNavbar}>
               <Icon as={FaBars} size={10} />
            </button>
         </div>
      </header>
   );
};
export default Navbar;