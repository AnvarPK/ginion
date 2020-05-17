import React from 'react';
import {
    NavLink
} from "react-router-dom";

const Navlinks = ({ language }) => {
    return (<>
        <div className="div-block-8">
            <NavLink to={`/${language.value}`} activeClassName="w--current" aria-current="page" className="nav-link-2 footer-link " >Home</NavLink>
            <NavLink to={`/${language.value}/ons-aanbod`} activeClassName="w--current" className="nav-link-2 footer-link " >ONS AANBOD</NavLink>
            <NavLink to={`/${language.value}/garanties-diensten`} activeClassName="w--current" className="nav-link-2 footer-link " >Garanties &amp; Diensten</NavLink>
            <NavLink to={`/${language.value}/financiering`} activeClassName="w--current" className="nav-link-2 footer-link " >FINANCIERING</NavLink>
            <NavLink to={`/${language.value}/over-ons`} activeClassName="w--current" className="nav-link-2 footer-link " >OVER ONS</NavLink>
            <NavLink to={`/${language.value}/contact`} activeClassName="w--current" className="nav-link-2 footer-link " >Contact</NavLink>
        </div>
    </>);
}

export default Navlinks;