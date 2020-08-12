import React, { useState } from 'react';
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
import useFormatprice from '../../components/useFormatprice';
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const FilterBox = ({ language, makes, models, body_types, fuel_types, mileage, gears, sell_price, first_regs, filters, handleDropDownChange, handleRangeChnage, handleRangePriceChange }) => {
    // let query = useQuery();
    const maxMilage = mileage.reduce((max, item) => max >= item.value ? max : item.value, mileage[0].value);
    const maxSellPrice = sell_price.reduce((max, item) => max >= item.value ? max : item.value, sell_price[0].value);
    const minSellPrice = sell_price.reduce((min, item) => min <= item.value ? min : item.value, sell_price[0].value);
    const [milageVl, setMilageVl] = useState(maxMilage);
    const [sellPriceVL, setSellPriceVL] = useState(maxSellPrice);

    fuel_types = fuel_types.map(item => {
        if (item.label === "GAS" && language.value === "nl") {
            item.label = "BENZINE"
        }
        else if (item.label === "GAS" && language.value === "fr") {
            item.label = "ESSENCE"
        }
        return item;
    }).sort((a, b) => a.label > b.label ? 1 : -1);

    gears = gears.map(item => {
        if (item.label === 'AUTO') item.label = 'AUTOMATIC'
        if (item.label === 'MANUAL' && language.value === "fr") item.label = 'MANUELLE'
        return item
    })

    const rangeChnage = (newValue, props) => {
        setMilageVl(newValue);
        handleRangeChnage(newValue, props)
    }

    const rangePriceChange = (newValue, props) => {
        setSellPriceVL(newValue);
        handleRangePriceChange(newValue, props)
    }

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
                            setVal={filters.make ? { value: filters.make, label: filters.make } : 'null'}
                        />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "MODEL" : "Modèle"}</div>
                        <DropDownSelect options={models}
                            tag="model"
                            hChange={handleDropDownChange} clearable={true}
                            placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'}
                            setVal={filters.model ? { value: filters.model, label: filters.model } : 'null'}
                        />
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">TYPE</div>
                        <DropDownSelect options={body_types}
                            tag="body_type"
                            hChange={handleDropDownChange} clearable={true}
                            placeholder={language.value === "nl" ? "Select..." : 'Selectionner...'}
                            setVal={filters.body_type ? { value: filters.body_type, label: filters.body_type } : 'null'}
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
                        <div className="text-block-5">{language.value === "nl" ? "PRIJS" : "PRIX"}</div>
                        <div className='slider-wrap'>
                            <Slider min={0} max={maxSellPrice} step={10}
                                defaultValue={maxSellPrice}
                                onChange={rangePriceChange}
                            />
                            <div className="range-s range-s-max">€{useFormatprice(sellPriceVL)}</div>
                        </div>
                    </div>
                    <div className="div-block-29">
                        <div className="text-block-5">{language.value === "nl" ? "KILOMETERSTAND" : "Kilométrage"}</div>
                        <div className='slider-wrap'>
                            <Slider min={0} max={maxMilage} step={10}
                                defaultValue={maxMilage}
                                onChange={rangeChnage}
                            />
                            <div className="range-s range-s-max">{milageVl}</div>
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