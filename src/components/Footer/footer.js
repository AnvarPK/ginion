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
                            <h2 className="heading-2">{language.value === "nl" ? "Nog niet zeker welk model je wilt?" : "Pas encore certain du modèle que vous souhaitez ?"}</h2><a href="#" className="button w-button">
                                {language.value === "nl" ? "BEKIJK ONS HELE AANBOD" : "Découvrez toute notre gramme"}</a>
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
                                <div className="div-block-2 footer-social-links"><a href="https://www.instagram.com/giniongroup/?hl=nl" target="_blank"
                                    className="link-block w-inline-block"><img src={Insta} alt="" className="image-3" /></a><a
                                        href="https://www.facebook.com/giniongroup" target="_blank" className="link-block w-inline-block"><img src={FB} alt=""
                                            className="image-3" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-block-2">© 2020 - Ginion group</div>
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