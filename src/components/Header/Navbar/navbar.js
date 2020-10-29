import React from 'react';
import {
    NavLink,
} from "react-router-dom";
import Dropdown from 'react-dropdown';
import FB from './facebook.svg'
import Insta from './Instagram.svg';
import 'react-dropdown/style.css';
import './style.css';
import { h, con, fn, gr, ons, ov } from '../../navItems';

const Navbar = ({ options, language, onChange }) => {
    const lanLink = language.value === "nl" ? "nlLink" : "frLink";

    return (
        <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="div-block-4">
                <NavLink to={`${h[lanLink]}`} aria-current="page"
                    activeClassName="w--current"
                    className="nav-link-2 w-nav-link "
                    exact={true}

                >{h[language.value]}</NavLink>
                <NavLink to={`${ons[lanLink]}`} activeClassName="w--current" className="nav-link-2 w-nav-link">{ons[language.value]}</NavLink >
                <NavLink to={`${gr[lanLink]}`} activeClassName="w--current" className="nav-link-2 w-nav-link">{gr[language.value]}</NavLink>
                <NavLink to={`${fn[lanLink]}`} activeClassName="w--current" className="nav-link-2 w-nav-link">{fn[language.value]}</NavLink>
                <NavLink to={`${ov[lanLink]}`} activeClassName="w--current" className="nav-link-2 w-nav-link">{ov[language.value]}</NavLink>
                <NavLink to={`${con[lanLink]}`} activeClassName="w--current" className="nav-link-2 w-nav-link">{con[language.value]}</NavLink>
            </div >
            <div className="div-block-2">
                <a href="https://www.facebook.com/ginionusedcars/?ref=br_rs" target="_blank" className="link-block w-inline-block"
                 rel="noopener noreferrer" 
                 >
                    <img src={FB} alt="" className="image-3" /></a>
                <a href="https://www.instagram.com/giniongroup/?hl=nl" target="_blank" className="link-block w-inline-block"
                 rel="noopener noreferrer" >

                    <img src={Insta} alt="" className="image-3" /></a>
            </div>
            <div className="div-block-3">
                <Dropdown
                    options={options}
                    onChange={onChange}
                    defaultOption={language}
                    value={language}
                />
            </div>
        </nav >
    )
};
export default Navbar; 