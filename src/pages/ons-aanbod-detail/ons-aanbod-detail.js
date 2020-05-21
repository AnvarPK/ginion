import React from 'react';
import { connect } from 'react-redux';
import Header from './vehicle/header';
import CarDetailSlider from './vehicle/car-detail-slider';
import Characteristics from './vehicle/characteristics';
import Equipment from "./vehicle/equipment";
import Warranties from '../../components/warranties';
import GoogleMap from '../../components/google-map';
import useFormatprice from '../../components/useFormatprice';

const OnsAanbodDetail = ({ vehicle, language }) => (<>
    <Header veh={vehicle} />
    <div className="detail-body">
        <div className="container-ginion">
            <div>
                <div className="w-row">
                    <div className="column-6 w-col w-col-8">
                        <div className="div-block-52">
                            <CarDetailSlider veh={vehicle} />
                            <div>
                                <Characteristics veh={vehicle} />
                                <Equipment options={vehicle.equipment_options} />
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
                                    <div className="div-block-50"><a href="#" className="btn-default">MAAK EEN AFSPRAAK</a></div>
                                    <div className="div-block-51">
                                        <div className="text-block-16">U vindt deze wagen bij</div>
                                        <h4 className="heading-7">Ginion Used Cars</h4>
                                        <div className="text-block-17">Chaussée de Bruxelles 56<br />1410 Waterloo<br /><br />Téléphone: <a href="tel:+32(0)23520379" className="link-2">+32 (0)2 352 03 79</a><br />E-mail: <a href="mailto:info@ginionusedcars.com" className="link-2">info@ginionusedcars.com</a></div>
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
