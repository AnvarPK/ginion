import React from 'react';
import DropDownSelect from '../../components/drop-down-select';

import {
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const FilterBox = ({ language, makes, models, fuel_types, gears, first_regs, handleDropDownChange }) => {
    let query = useQuery();


    return (
        <div className="w-col w-col-3">
            <div className="div-block-27">
                <div className="div-block-26">
                    <div className="text-block-4">VERFIJN DE RESULTATEN</div>
                </div>
                <div className="div-block-28">
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "MERK" : "Marque"}</div>
                        <DropDownSelect options={makes}
                            tag="make"
                            clearable={true}
                            hChange={handleDropDownChange}
                            setVal={query.get("make") ? { value: query.get("make"), label: query.get("make") } : 'null'}
                        />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "MODEL" : "Modèle"}</div>
                        <DropDownSelect options={models}
                            tag="model"
                            hChange={handleDropDownChange} clearable={true}
                            setVal={query.get("model") ? { value: query.get("model"), label: query.get("model") } : 'null'}
                        />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">Brandstof</div>
                        <DropDownSelect options={fuel_types}
                            tag="fuel_type"
                            hChange={handleDropDownChange} clearable={true} />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">VERSNELLINGSBAK</div>
                        <DropDownSelect options={gears}
                            tag="gears"
                            hChange={handleDropDownChange} clearable={true} />

                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">KILOMETERSTAND</div>
                        <DropDownSelect options={fuel_types}
                            tag="fuel_type"

                            hChange={handleDropDownChange} clearable={true} />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">EERSTE inschrijving</div>
                        <DropDownSelect options={first_regs}
                            tag="first_reg"
                            hChange={handleDropDownChange} clearable={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBox;