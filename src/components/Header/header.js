import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../../redux/actions/language';
import Dropdown from 'react-dropdown';
import Navbar from './Navbar';
import Logo from './logo.svg';
import { useLocation } from "react-router";
import {
    Link, withRouter
} from "react-router-dom";

const Header = ({ history, dispatch, language }) => {
    let { pathname, search } = useLocation();

    const languageOptions = [
        { value: 'nl', label: 'NL' },
        { value: 'fr', label: 'FR' }
    ]

    const _onSelect = function (v) {
        const [, second, third] = pathname.split('/');
        if (second === v.value) return '';
        dispatch(setLanguage({ ...v }));
        const newPath = `${pathname.replace(second, v.value)}${search}`;
        history.push(newPath)
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

                    <div className="menu-button w-nav-button">
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

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

export default withRouter(connect(mapStateToProps)(Header));
