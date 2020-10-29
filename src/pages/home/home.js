import React from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import {
    getMostViewed
} from '../../redux/selectors/vehicles';
import { getMakes, getModels } from '../../redux/selectors/dropDownOptions';
import { setMake, setModel } from '../../redux/actions/filters';
import Warranties from '../../components/warranties';
import MostViwed from './most-viewed';
import GoogleMap from '../../components/google-map';
import DropDownSelect from '../../components/drop-down-select';
import {
    Link
} from "react-router-dom";
import './home.css';
import { ons } from '../../components/navItems';

const Home = ({ makes, models, language, mostViewed, dispatch }) => {
    // const [urlMake, setUrlMake] = useState(''),
        // [urlModel, setUrlModel] = useState('');

    const handleDropdownChange = (value, tag) => {
        if (tag === "make") {
            dispatch(setModel(null))
            // setUrlModel('');
            dispatch(setMake(value.value))
            // setUrlMake(value.value);
        }
        else {
            // setUrlModel(value.value);
            dispatch(setModel(value.value))
        }
    }

    const customStyles = {
        control: (provided,) => ({
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
            <Helmet>
                <title>{language.value === "nl" ? "Vind uw tweedehandswagen | Ginion Used Cars" : "Trouver votre véhicule d'occasion - Ginion Used Cars"}</title>
                <meta name="description" content={language.value === "nl" ? "Welkom bij Ginion. Als organisatie willen we u niet alleen de beste wagen geven, maar ook een uitstekende service. Zoek nu uw droomwagen!" : "Bienvenue chez Ginion. Nous voulons vous offrir non seulement la meilleure voiture, mais aussi un excellent service. Trouvez votre voiture de rêve maintenant!"} />
            </Helmet>

            <div className="home-banner" >
                <div className="container-ginion">
                    <div className="div-block-6">
                        <div className="div-block-41">
                            <h1 className="heading">{language.value === "nl" ? "DE BESTE TWEEDEHANDS WAGENS" : "Les meilleurs véhicules d’occasion"}</h1>
                        </div>
                        <div className="div-block-42">
                            <h3 className="heading-5">{zok[language.value]}</h3>
                            <div>
                                <div className="w-form">
                                    <div className="div-block-43">
                                        <div className="div-block-44"><label htmlFor="name" className="field-label-2">{language.value === "nl" ? "MERK" : "Marque"}</label>
                                            <DropDownSelect
                                                placeholder={language.value === "nl" ? "Kies uw merk" : "Choisissez votre marque"}
                                                options={makes} tag="make"
                                                hChange={handleDropdownChange}
                                                className="text-field-2 w-input"
                                                cs={customStyles}

                                            />
                                        </div>
                                        <div className="div-block-44"><label htmlFor="name-2" className="field-label-2">{language.value === "nl" ? "MODEL" : "Modèle"}</label>
                                            <DropDownSelect
                                                placeholder={language.value === "nl" ? "Kies uw model" : "Choisissez votre modèle"}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MostViwed data={mostViewed} lan={language} />

            <Warranties lan={language} />

            <div className="company-map">
                <div className="div-block-12">
                    <GoogleMap className="w-widget w-widget-map" />
                </div>
            </div>

        </>);
}


const mapStateToProps = (state) => {
    return {
        mostViewed: getMostViewed(state.vehicles),
        makes: getMakes(state.vehicles),
        models: getModels(state.vehicles, state.filters.make),
        language: state.language
    }
};

export default connect(mapStateToProps)(Home);
