import React from 'react';
import VehicleBox from './vehicle-box';

const VehicleList = ({ data, lan }) => (<>
    {
        [...data].map((vehicle, i) => <VehicleBox data={vehicle} lan={lan} key={i} />)
    }
</>);

export default VehicleList;
