import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../redux/actions/language';
import Dropdown from 'react-dropdown';
import Navbar from './Navbar';
import Logo from './logo.svg';
import { useLocation } from "react-router";
import {
    Link, withRouter
} from "react-router-dom";
import { links } from '../navItems';

const Header = ({ history, dispatch, language }) => {
    // let { pathname, search } = useLocation();
    let { pathname } = useLocation();
    // const [navOpen, setNavOpen]=useState(false);
    const [navOpen, setNavOpen] = useState('w-nav-overlay');
    let mobNavContainer = useRef(null);

    useEffect(() => {
        const nvContainer = mobNavContainer.current;
        nvContainer.style.height = `${document.body.clientHeight}px`;
    }, [navOpen])

    const languageOptions = [
        { value: 'nl', label: 'NL' },
        { value: 'fr', label: 'FR' }
    ]

    const _onSelect = function (v) {
        const lanLink = v.value === "nl" ? "nlLink" : "frLink";
        const [, second, third] = pathname.split('/');
        if (second === v.value) return '';
        dispatch(setLanguage({ ...v }));
        // const newPath = `${pathname.replace(second, v.value)}${search}`;
        let newPath = `${pathname.replace(second, v.value)}`;
        if (third) newPath = newPath.replace(third, links[third]);
        console.log(newPath);
        history.push(newPath)
    }

    const navButtonClick = () => {
        navOpen === "w-nav-overlay" ? setNavOpen('w-nav-overlay w-nav-overlay--open') : setNavOpen('w-nav-overlay');


    }

    const overlayClick = (e) => {
        if (e.target.className === navOpen) {
            navButtonClick();
        }
    }

    return (
        <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" className="main-navbar w-nav">
            <div className="container-ginion w-container">
                <div className="div-block">
                    <Link to={`/${language.value}`} className="brand w-nav-brand">
                        <img src={Logo} alt="" className="image-2" /></Link>

                    <Navbar
                        language={language}
                        options={languageOptions}
                        onChange={_onSelect}
                        defaultOption={language}
                    />

                    <div className="menu-button w-nav-button" onClick={navButtonClick}>
                        <div className="icon-2 w-icon-nav-menu"></div>
                    </div>

                    <div className="div-block-5">
                        <Dropdown options={languageOptions}
                            onChange={_onSelect}
                            defaultOption={language}
                            value={language} />
                    </div>
                </div>
            </div>
            <div className={navOpen} ref={mobNavContainer} data-wf-ignore="" onClick={overlayClick} >
                <Navbar
                    language={language}
                    options={languageOptions}
                    onChange={_onSelect}
                    defaultOption={language}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

export default withRouter(connect(mapStateToProps)(Header));
