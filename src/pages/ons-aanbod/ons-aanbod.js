import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import getVisibleVehicles from '../../redux/selectors/vehicles';
import { getMakes, getMileage, getModels, getBodyType, getFuelTypes, getGears, getSellPrice, getFirstRegs } from '../../redux/selectors/dropDownOptions';
import { setMake, setModel, setBodyType, setMileage, setFuelType, setGears, setSellPrice, setFirstReg, setFilterEmpty } from '../../redux/actions/filters';
import GoogleMap from '../../components/google-map';
import Warranties from '../../components/warranties';
import FilterBox from './filter-box';
import VehicleList from './vehicle-list';


const OnsAanbod = (props) => {
    const { dispatch, language } = props;

    useEffect(() => {
        return () => {
            dispatch(setFilterEmpty());
        }

    }, [])

    const handleDropdownChange = (value, tag) => {

        let v = value || { value: undefined };
        switch (tag) {
            case 'make':
                return dispatch(setMake(v.value));
            case 'model':
                return dispatch(setModel(v.value));
            case 'body_type':
                return dispatch(setBodyType(v.value));
            case 'fuel_type':
                return dispatch(setFuelType(v.value));
            case 'mileage':
                return dispatch(setMileage(v.value));
            case 'gears':
                return dispatch(setGears(v.value));
            case 'first_reg':
                return dispatch(setFirstReg(v.value));
            default:
                return;
        }
    }

    const handleRangeChnage = (newValue, props) => {
        return dispatch(setMileage(newValue));
    }

    const handleRangePriceChange = (newValue, props) => {
        return dispatch(setSellPrice(newValue));
    }

    return (
        <>
            <Helmet>
                <title>{language.value === "nl" ? "Ons aanbod | Ginion Used Cars" : "Notre gamme - Ginion Used Cars"}</title>
                <meta name="description" content={language.value === "nl" ? "Ontdek op deze pagina ons ruime aanbod van tweedehandswagens. Selecteer op merk, model, brandstof, kilometerafstand en versnellingsbak." : "Découvrez notre large gamme de voitures d'occasion. Sélectionnez par marque, modèle, carburant, kilométrage et boîte de vitesses."} />
            </Helmet>

            <div className="banner-ons-aanbod">
                <div className="div-block-24">
                    <div className="div-block-25">
                        <h1 className="h1">
                            {language.value === "nl" ? "Ontdek hier ons ruime aanbod  tweedehands wagens" : "Découvrez notre large gamme de voitures d’occasion ici"}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="car-collection">
                <div className="container-ginion">
                    <div>
                        <div className="w-row">
                            <FilterBox
                                {...props}
                                handleDropDownChange={handleDropdownChange}
                                handleRangeChnage={handleRangeChnage}
                                handleRangePriceChange={handleRangePriceChange}
                            />
                            <div className="w-col w-col-9">
                                <div className="w-layout-grid grid-2">
                                    <VehicleList data={props.vehicles} lan={props.language} />
                                </div>
                                {/* <div className="div-block-57">
                                    <a href="#" className="link-block-4 w-inline-block">
                                        <div className="text-block-18">BEKIJK MEER RESULTATEN</div><img src={Load} alt="" /></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Warranties lan={language} />

            <div className="company-map">
                <div className="div-block-12">
                    <GoogleMap className="w-widget w-widget-map" />
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        vehicles: getVisibleVehicles(state.vehicles, state.filters),
        makes: getMakes(state.vehicles),
        models: getModels(state.vehicles, state.filters.make),
        body_types: getBodyType(state.vehicles),
        mileage: getMileage(state.vehicles),
        sell_price: getSellPrice(state.vehicles),
        fuel_types: getFuelTypes(state.vehicles),
        gears: getGears(state.vehicles),
        first_regs: getFirstRegs(state.vehicles),
        language: state.language,
        filters: state.filters
    }
};

export default connect(mapStateToProps)(OnsAanbod);