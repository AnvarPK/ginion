import React from 'react';
import { connect } from 'react-redux';
import { getMakes, getModels } from '../../redux/selectors/dropDownOptions';
import { setMake, setModel } from '../../redux/actions/filters';
import DropDownSelect from '../../components/drop-down-select';
import {
    Link
} from "react-router-dom";
import { ons } from '../navItems';

const FindVehicle = ({ makes, models, language, dispatch }) => {

    const handleDropdownChange = (value, tag) => {

        if (tag === "make") {
            dispatch(setModel(null))
            dispatch(setMake(value.value))
        }
        else {
            dispatch(setModel(value.value))
        }
    }

    const customStyles = {
        control: (provided,) => ({
            // ...provided,
            border: '1px solid #939393',
            height: 38,
            marginBottom: 15,
            fontFamily: 'Barlow, sans-serif',
            color: '#848b8f',
            fontSize: 12,
            lineHeight: '14px',
            fontWeight: 500,
            borderRadius: 5,

        }),
        input: (provided,) => ({
            ...provided,
            paddingTop: 9,
            paddingBottom: 9,
        }),
        placeholder: (provided, state) => ({
            ...provided,
            margin: 0
        }),
        valueContainer: (provided,) => ({
            ...provided,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 12,
            paddingRight: 12
        }),
        dropdownIndicator: (provided,) => ({
            ...provided,
            display: 'none',
        }),
        option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
            ...provided,
            backgroundColor: isSelected ? '#0584a0' : null,
            ':hover': {
                ...provided[':hover'],
                backgroundColor: isSelected ? data.color : 'rgba(5,132,160,0.5)',
            }
        }),
    }

    const zok = {
        nl: "Zoek uw voertuig",
        fr: "Chercher votre voiture"
    }
    const lanLink = language.value === "nl" ? "nlLink" : "frLink";

    return (
        <>
            <div className="div-block-36" style={{ overflow: 'visible' }}>
                <div className="div-block-35">
                    <h5 className="heading-4">{zok[language.value]}</h5>
                </div>
                <div className="form-block w-form">
                    <div className="div-block-37" style={{ paddingBottom: 15 }}><label className="field-label">{language.value === "nl" ? "MERK" : "Marque"}</label>
                        <DropDownSelect
                            placeholder={language.value === "nl" ? "Kies uw merk" : 'Choisissez votre marque'}
                            options={makes} tag="make"
                            hChange={handleDropdownChange}
                            className="text-field-2 w-input"
                            cs={customStyles}

                        />
                    </div>
                    <div className="div-block-37" style={{ paddingBottom: 15 }}><label className="field-label">{language.value === "nl" ? "MODEL" : "Modèle"}</label>
                        <DropDownSelect
                            placeholder={language.value === "nl" ? "Kies uw model" : 'Choisissez votre modèle'}
                            options={models} tag="model"
                            hChange={handleDropdownChange}
                            cs={customStyles}

                        />
                    </div>

                    <Link to={`${ons[lanLink]}`} className="submit-button w-button">
                        {language.value === "nl" ? "Toon modellen" : "Voir les modèles"}
                    </Link>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        makes: getMakes(state.vehicles),
        models: getModels(state.vehicles, state.filters.make),
        language: state.language
    }
};

export default connect(mapStateToProps)(FindVehicle);
