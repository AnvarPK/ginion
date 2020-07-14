import React from 'react';
import ProgressiveImage from "../../components/ProgressiveImage";
import useFormatprice from '../../components/useFormatprice';
import overlaySrc from './size-2.jpg';
import {
    Link
} from "react-router-dom";
import { ons } from '../../components/navItems';


const VehicleBox = ({ data, lan }) => {
    const { id, version, make, model, sell_price, img, gears } = data;
    const lanLink = lan.value === "nl" ? "nlLink" : "frLink";
    const url = `${ons[lanLink]}/${id}`;

    return (<Link to={url} className="link-block-2 w-inline-block">
        <div className="div-block-18">
            <div className="div-block-20">
                <ProgressiveImage src={img} overlaySrc={overlaySrc} className="image-6" />
            </div>
            <div>
                <div className="div-block-22">
                    <div className="car-name">{`${make} ${model}`}</div>
                    <div className="car-details">{version}</div>
                </div>
                <div className="div-block-21">
                    <div className="price">€ {useFormatprice(sell_price)}</div>
                    <div className="more-btn">{lan.value === "nl" ? "BEKIJK DETAILS" : "Voir détails"}</div>
                </div>
            </div>
        </div>
    </Link>);
}

export default VehicleBox;