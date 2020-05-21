import React from 'react';
import ProgressiveImage from "../../components/ProgressiveImage";
import useFormatprice from '../../components/useFormatprice';
import overlaySrc from './size-2.jpg';
import {
    Link
} from "react-router-dom";



const VehicleBox = ({ data, lan }) => {
    const { id, version, make, model, sell_price, img } = data;
    const url = `/${lan.value}/ons-aanbod/${id}`;

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
                    <div className="more-btn">BEKIJK DETAILS</div>
                </div>
            </div>
        </div>
    </Link>);
}

export default VehicleBox;