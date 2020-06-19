import React from 'react';
import DropDownSelect from '../../components/drop-down-select';
import {
    Slider,
    SliderInput,
    SliderTrack,
    SliderTrackHighlight,
    SliderHandle,
    SliderMarker,
} from "@reach/slider";
import "@reach/slider/styles.css";

import {
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const FilterBox = ({ language, makes, models, fuel_types, mileage, gears, first_regs, handleDropDownChange, handleRangeChnage }) => {
    let query = useQuery();
    const maxMilage = mileage.reduce((max, item) => max >= item.value ? max : item.value, mileage[0].value);

    return (
        <div className="w-col w-col-3 " style={{ marginBottom: "25px" }}>
            <div className="div-block-27">
                <div className="div-block-26">
                    <div className="text-block-4">
                        {language.value === "nl" ? "VERFIJN DE RESULTATEN" : "Affiner les résultats"}
                    </div>
                </div>
                <div className="div-block-28">
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "MERK" : "Marque"}</div>
                        <DropDownSelect options={makes}
                            tag="make"
                            clearable={true}
                            hChange={handleDropDownChange}
                            placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'}
                            setVal={query.get("make") ? { value: query.get("make"), label: query.get("make") } : 'null'}
                        />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "MODEL" : "Modèle"}</div>
                        <DropDownSelect options={models}
                            tag="model"
                            hChange={handleDropDownChange} clearable={true}
                            placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'}
                            setVal={query.get("model") ? { value: query.get("model"), label: query.get("model") } : 'null'}
                        />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "Brandstof" : "Carburant"}</div>
                        <DropDownSelect options={fuel_types}
                            tag="fuel_type"
                            placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'}
                            hChange={handleDropDownChange} clearable={true} />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "VERSNELLINGSBAK" : "Boite de vitesse"}</div>
                        <DropDownSelect options={gears}
                            tag="gears"
                            placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'}
                            hChange={handleDropDownChange} clearable={true} />

                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "KILOMETERSTAND" : "Kilométrage"}</div>
                        {/* <DropDownSelect options={mileage}
                            tag="mileage"
                            placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'}
                            hChange={handleDropDownChange} clearable={true} /> */}
                        <div className='slider-wrap'>
                            <Slider min={0} max={maxMilage} step={10}
                                defaultValue={maxMilage}
                                onChange={handleRangeChnage}
                            />
                            <div className="range-s range-s-max">{maxMilage}</div>
                        </div>

                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "EERSTE inschrijving" : "Première immatriculation"}</div>
                        <DropDownSelect options={first_regs}
                            tag="first_reg"
                            hChange={handleDropDownChange} clearable={true} placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBox;