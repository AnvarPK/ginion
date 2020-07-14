import React from 'react';
import {
    NavLink
} from "react-router-dom";
import { h, con, fn, gr, ons, ov } from '../navItems';

const Navlinks = ({ language }) => {
    const lanLink = language.value === "nl" ? "nlLink" : "frLink";
    return (<>
        <div className="div-block-8">
            <NavLink to={`/nl`} activeClassName="w--current" aria-current="page" className="nav-link-2 footer-link " >{h[language.value]}</NavLink>
            <NavLink to={`${ons[lanLink]}`} activeClassName="w--current" className="nav-link-2 footer-link " >{ons[language.value]}</NavLink>
            <NavLink to={`${gr[lanLink]}`} activeClassName="w--current" className="nav-link-2 footer-link " >{gr[language.value]}</NavLink>
            <NavLink to={`${fn[lanLink]}`} activeClassName="w--current" className="nav-link-2 footer-link " >{fn[language.value]}</NavLink>
            <NavLink to={`${ov[lanLink]}`} activeClassName="w--current" className="nav-link-2 footer-link " >{ov[language.value]}</NavLink>
            <NavLink to={`${con[lanLink]}`} activeClassName="w--current" className="nav-link-2 footer-link " >{con[language.value]}</NavLink>
        </div>

    </>);
}

export default Navlinks;