import React from 'react';
import { connect } from 'react-redux';
import {
    NavLink
} from "react-router-dom";
import Logo from './logo-usedcars.svg';
import Navlinks from './navlinks';
import FB from './fb_1.svg';
import Insta from './Instagram_1.svg';

const Footer = ({ language }) => {
    return (
        <>
            <div className="footer-top-btn">
                <div className="div-block-10">
                    <div className="container-ginion">
                        <div className="div-block-11">
                            <h2 className="heading-2">{language.value === "nl" ? "Nog niet zeker welk model u zoekt?" : "Pas encore certain du modèle que vous souhaitez ?"}</h2><NavLink to={`/${language.value}/ons-aanbod`} className="button w-button">
                                {language.value === "nl" ? "BEKIJK ONS HELE AANBOD" : "Découvrez toute notre gamme"}</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="div-block-9">
                    <div className="container-ginion">
                        <div className="flex">
                            <div className="div-block-7">
                                <NavLink to={`/${language.value}`}
                                    className="w-inline-block"
                                >
                                    <img src={Logo} alt="" className="image-4" />
                                </NavLink>
                                <Navlinks language={language} />
                            </div>
                            <div>
                                <div className="div-block-2 footer-social-links">
                                    <a href="https://www.instagram.com/giniongroup/?hl=nl" target="_blank" rel="noopener noreferrer"
                                        className="link-block w-inline-block"><img src={Insta} alt="" className="image-3" /></a>
                                    <a
                                        href="https://www.facebook.com/giniongroup" target="_blank" rel="noopener noreferrer" className="link-block w-inline-block"><img src={FB} alt=""
                                            className="image-3" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="text-block-2">© 2020 - Ginion group</div>
                    <div className="text-block-2">  <NavLink to={`/${language.value}/cookies`}>Cookies</NavLink> &nbsp;&nbsp;I&nbsp;&nbsp;
                     <a href="https://www.yellowshape.com/nl/home" target="_blank" title="Webdesign Antwerpen"
                      rel="noopener noreferrer" 
                      >Website by Yellowshape</a></div>
                </div>
            </footer>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        language: state.language
    }
};

export default connect(mapStateToProps)(Footer);