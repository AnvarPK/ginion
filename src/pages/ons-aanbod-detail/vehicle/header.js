import React from 'react';

const Header = (pros) => (
    <div className="text-banner">
        <div className="container-ginion">
            <div className="div-block-30">
                <h1 className="heading-3">{`${pros.veh.make} ${pros.veh.model}`}</h1>
                <div className="text-block-12">{pros.veh.version}</div>
            </div>
        </div>
    </div>);

export default Header;