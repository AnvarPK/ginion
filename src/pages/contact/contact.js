import React from 'react';
import Img from './image-18.png';
import ImgP from './image-18-p-500.png';
import FindVehicle from '../../components/find-vehicle';
import GoogleMap from '../../components/google-map';

const Contact = () => {
    const imgSet = `${ImgP} 500w, ${Img} 763w`;
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
                                    <div className="div-block-40"><img src={Img} srcSet={imgSet} sizes="(max-width: 479px) 87vw, (max-width: 767px) 92vw, 53vw" alt="" className="image-9" /></div>
                                    <div className="div-block-39">
                                        <div className="text-block-9">Ginion Used Cars</div>
                                        <div className="text-block-10">Chaussée de Bruxelles, 54<br />1410 Waterloo</div>
                                    </div>
                                    <div className="div-block-39">
                                        <div className="text-block-9">Contact</div>
                                        <div className="text-block-10">Telefoon: <a href="tel:023520330" className="link">02 352 03 30</a></div>
                                        <div className="text-block-10">E-mail: <a href="mailto:info@ginionwaterloo.net.bmw.be" className="link">info@ginionwaterloo.net.bmw.be</a></div>
                                    </div>
                                    <div className="div-block-39">
                                        <div className="text-block-9">Openingsuren</div>
                                        <div className="text-block-10">Ma - Vr. : 09:00 - 19:00<br />Za : 09:30 - 17:30</div>
                                    </div>
                                    <div className="div-block-39"><a target="_blank" className="link-block-3 w-inline-block"><img src="../images/Instagram.svg" alt="" /><div className="text-block-11">Ginion Group</div></a><a target="_blank" className="link-block-3 w-inline-block"><img src="../images/facebook.svg" alt="" /><div className="text-block-11">@GinionGroup</div></a></div>
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