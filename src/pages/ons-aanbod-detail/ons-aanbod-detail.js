import React from 'react';
import { Helmet } from "react-helmet";
import {
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import Header from './vehicle/header';
import CarDetailSlider from './vehicle/car-detail-slider';
import Characteristics from './vehicle/characteristics';
import Equipment from "./vehicle/equipment";
import Warranties from '../../components/warranties';
import GoogleMap from '../../components/google-map';
import useFormatprice from '../../components/useFormatprice';



const OnsAanbodDetail = ({ vehicle, language }) => (<>
    <Helmet>
        <title>{language.value === "nl" ? `${vehicle.make} ${vehicle.model} | Ginion Used Cars` : `${vehicle.make} ${vehicle.model} - Ginion Used Cars`}</title>
        <meta name="description" content={language.value === "nl" ? `Ontdek op deze pagina alle specificaties over ${vehicle.make} ${vehicle.model}. Zit je nog met vragen? Contacteer ons dan!` : `Découvrez toutes les spécifications de ${vehicle.make} ${vehicle.model} sur cette page. Avez-vous d'autres questions? Alors contactez-nous!`} />
    </Helmet>

    <Header veh={vehicle} />
    <div className="detail-body">
        <div className="container-ginion">
            <div>
                <div className="w-row">
                    <div className="column-6 w-col w-col-8">
                        <div className="div-block-52">
                            <CarDetailSlider veh={vehicle} />
                            <div>
                                <Characteristics veh={vehicle} lan={language.value} />
                                <Equipment options={vehicle.equipment_options} lan={language.value} />
                            </div>
                        </div>
                    </div>
                    <div className="column-5 w-col w-col-4">
                        <div>
                            <div className="div-block-36 detail-right-block">
                                <div className="div-block-35 detail-block-1">
                                    <h5 className="heading-4 detail-heading-4">€ {useFormatprice(vehicle.sell_price)}</h5>
                                    <div className="text-block-15">&nbsp;
                                        {/* ipv € 19.234 */}
                                    </div>
                                </div>
                                <div>
                                    <div className="div-block-50"><Link to={`/${language.value}/contact`} className="btn-default">{language.value == "nl" ? "MAAK EEN AFSPRAAK" : "Prenez un rendez-vous"}</Link></div>
                                    <div className="div-block-51">
                                        <div className="text-block-16">{language.value == "nl" ? "U vindt deze wagen bij" : "Cette voiture se trouve chez"}</div>
                                        <h4 className="heading-7">Ginion Used Cars</h4>
                                        <div className="text-block-17">Chaussée de Bruxelles 56<br />1410 Waterloo<br /><br />{language.value == "nl" ? "Telefoon:" : "Téléphone:"} <a href="tel:+32(0)23520379" className="link-2">+32 (0)2 352 03 79</a><br />E-mail: <a href="mailto:info@ginionusedcars.com" className="link-2">info@ginionusedcars.com</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Warranties lan={language} />

    <div className="company-map">
        <div className="div-block-12">
            <GoogleMap className="w-widget w-widget-map" />
        </div>
    </div>
</>);

const mapStateToProps = (state, props) => {
    return {
        vehicle: state.vehicles.find(vehicle => vehicle.id === props.match.params.id),
        language: state.language
    }
};

export default connect(mapStateToProps)(OnsAanbodDetail);
