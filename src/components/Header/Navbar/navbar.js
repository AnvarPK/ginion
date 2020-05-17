import React from 'react';
import {
    NavLink,
} from "react-router-dom";
import Dropdown from 'react-dropdown';
import FB from './facebook.svg'
import Insta from './Instagram.svg';
import 'react-dropdown/style.css';
import './style.css';


const Navbar = ({ options, language, onChange }) => (
    <nav role="navigation" className="nav-menu w-nav-menu">
        <div className="div-block-4">
            <NavLink to={`/${language.value}`} aria-current="page"
                activeClassName="w--current"
                className="nav-link-2 w-nav-link "
                exact={true}

            >Home</NavLink>
            <NavLink to={`/${language.value}/ons-aanbod`} activeClassName="w--current" className="nav-link-2 w-nav-link">ons aanbod</NavLink >
            <NavLink to={`/${language.value}/garanties-diensten`} activeClassName="w--current" className="nav-link-2 w-nav-link">Garanties &amp; Diensten</NavLink>
            <NavLink to={`/${language.value}/financiering`} activeClassName="w--current" className="nav-link-2 w-nav-link">FINANCIERING</NavLink>
            <NavLink to={`/${language.value}/over-ons`} activeClassName="w--current" className="nav-link-2 w-nav-link">OVER ONS</NavLink>
            <NavLink to={`/${language.value}/contact`} activeClassName="w--current" className="nav-link-2 w-nav-link">Contact</NavLink>
        </div >
        <div className="div-block-2">
            <a href="https://www.facebook.com/giniongroup" target="_blank" className="link-block w-inline-block">
                <img src={FB} alt="" className="image-3" /></a>
            <a href="https://www.instagram.com/giniongroup/?hl=nl" target="_blank" className="link-block w-inline-block">
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
);

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

{/* export default connect(mapStateToProps)(Navbar);  */ }
export default Navbar; 