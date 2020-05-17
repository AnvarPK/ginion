import React from 'react';
import VehicleBox from '../ons-aanbod/vehicle-box';

const MostViwed = (props) => {


    return (<>
        <div className="home-car-blocks">
            <div className="container-ginion">
                <div className="div-block-19">
                    <h2 className="heading-2 black-text">onze meest bekeken wagens</h2>
                    <div className="div-block-23">
                        <div className="w-layout-grid grid">
                            {
                                [...props.data].map((vehicle, i) => <VehicleBox data={vehicle} lan={props.lan} key={i} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default MostViwed;