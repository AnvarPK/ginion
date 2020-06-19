import React from 'react';

const Characteristics = ({ veh, lan }) => {
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
            <h5 className="heading-6 text-block-7">{lan == "nl" ? "Eigenschappen" : "Caractéristiques"}</h5>
            <div>
                <ul className="list-3 w-list-unstyled">
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Eerste inschrijving" : "Première immatriculation"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{first_reg}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Kilometerstand" : "Kilométrage"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{mileage} km</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Vermogen" : "Puissance"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{kw} kW/ {hp} pk</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Cilinderinhoud" : "Cylindrée"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">-- cm3<br /></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Versnellingsbak" : "Boites à vitesse"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{gears}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Deurs" : "Portes"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{doors}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Brandstof" : "Carburant"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{fuel_type}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "CO2uitstoot (NEDC)" : "Émissions CO2 (NEDC)"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">{co2} g/km</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "CO2uitstoot (WLTP)" : "emissions CO2 (WLTP)"}</div>
                            </div>
                            <div className="div-block-45">
                                <div className="text-block-13 text-black">-- g/km</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="div-block-46 last-line">
                            <div className="div-block-45">
                                <div className="text-block-13">{lan == "nl" ? "Euronorm" : "Norme Euro"}</div>
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