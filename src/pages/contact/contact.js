import React from 'react';
import Img from './img.jpeg';
import overlaySrc from './img.jpg';
import ProgressiveImage from "../../components/ProgressiveImage";
// import ImgP from './image-18-p-500.png';

import FindVehicle from '../../components/find-vehicle';
import GoogleMap from '../../components/google-map';

const Contact = () => {
    return (
        <>
            <div className="text-banner">
                <div className="container-ginion">
                    <div className="div-block-30">
                        <h1 className="heading-3">CONTACT</h1>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="container-ginion">
                    <div>
                        <div className="w-row">
                            <div className="column-3 w-col w-col-8">
                                <div className="div-block-38">
                                    <div className="div-block-40">
                                        <ProgressiveImage src={Img} overlaySrc={overlaySrc} className="image-9" />
                                    </div>
                                    <div className="div-block-39">
                                        <div className="text-block-9">Ginion Used Cars</div>
                                        <div className="text-block-10">Chaussée de Bruxelles, 56<br />1410 Waterloo</div>
                                    </div>
                                    <div className="div-block-39">
                                        <div className="text-block-9">Contact</div>
                                        <div className="text-block-10">Telefoon: <a href="tel:+32(0)23520379" className="link">+32 (0)2 352 03 79</a></div>
                                        <div className="text-block-10">E-mail: <a href="mailto:info@ginionusedcars.com" className="link">info@ginionusedcars.com</a></div>
                                    </div>
                                    <div className="div-block-39">
                                        <div className="text-block-9">Openingsuren</div>
                                        <div className="text-block-10">Ma - Vr. : 09:00 - 19:00<br />Za : 09:30 - 17:30</div>
                                    </div>

                                </div>
                            </div>
                            <div className="column-4 w-col w-col-4">
                                <FindVehicle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="company-map">
                <div className="div-block-12">
                    <GoogleMap className="w-widget w-widget-map" />
                </div>
            </div>
        </>
    );
}

export default Contact;