import React from 'react';
import {
    NavLink
} from "react-router-dom";
import { h, con, fn, gr, ons, ov } from '../navItems';

const Navlinks = ({ language }) => {
    return (<>
        <div className="div-block-8">
            <NavLink to={`/${language.value}`} activeClassName="w--current" aria-current="page" className="nav-link-2 footer-link " >{h[language.value]}</NavLink>
            <NavLink to={`/${language.value}/ons-aanbod`} activeClassName="w--current" className="nav-link-2 footer-link " >{ons[language.value]}</NavLink>
            <NavLink to={`/${language.value}/garanties-diensten`} activeClassName="w--current" className="nav-link-2 footer-link " >{gr[language.value]}</NavLink>
            <NavLink to={`/${language.value}/financiering`} activeClassName="w--current" className="nav-link-2 footer-link " >{fn[language.value]}</NavLink>
            <NavLink to={`/${language.value}/over-ons`} activeClassName="w--current" className="nav-link-2 footer-link " >{ov[language.value]}</NavLink>
            <NavLink to={`/${language.value}/contact`} activeClassName="w--current" className="nav-link-2 footer-link " >{con[language.value]}</NavLink>
        </div>
    </>);
}

export default Navlinks;