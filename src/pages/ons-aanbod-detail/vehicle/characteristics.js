import React from 'react';

const Characteristics = ({ veh }) => {
    const {
        first_reg,
        mileage,
        kw,
        hp,
        gears,
        doors,
        fuel_type,
        co2,
        euroNorm,
    } = veh;
    return (
        <div className="div-block-47">
            <h5 className="heading-6 text-block-7">Eigenschappen</h5>
            <div>
                <ul className="list-3 w-list-unstyled">
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">Eerste inschrijving</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{first_reg}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">Kilometerstand</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{mileage} km</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">Vermogen</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{kw} kW/ {hp} pk</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">Cilinderinhoud</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">-- cm3<br /></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">Versnellingsbak</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{gears}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">Deurs</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{doors}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">Brandstof</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{fuel_type}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">CO2uitstoot (NEDC)</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{co2} g/km</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">CO2uitstoot (WLTP)</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">-- g/km</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46 last-line">
                            <div className="div-block-45">
                                <div className="text-block-13">Euronorm</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{euroNorm}<br /></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Characteristics;