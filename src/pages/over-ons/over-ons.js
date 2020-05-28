import React from 'react';
import { connect } from 'react-redux';
import FindVehicle from '../../components/find-vehicle';
import GoogleMap from '../../components/google-map';


const Nl = () => (
    <div className="div-block-34">
        <p>Onze ambitie steunt op één enkel principe: de beste zijn in ons vak! Dit betekent dat wij onze klanten een uitzonderlijke commerciële en technische service bieden. Dit is een wezenlijk onderdeel van onze bedrijfscultuur. Het vertaalt zich in al wat wij doen en in onze organisatie.</p>
        <p>Onze medewerkers krijgen permanent opleiding en beantwoorden aan de strengste criteria. Wederzijds vertrouwen en eerlijkheid liggen aan de basis van onze relaties met derden, zowel intern als naar buiten toe.<br /></p>
        <p><em>Stéphane Sertang CEO Ginion Group</em></p>
    </div>
);
const Fr = () => (
    <div className="div-block-34">
        <p>Notre ambition repose sur un principe : être les meilleurs dans notre métier!<br />
        A notre clientèle, nous apportons un service commercial et technique d’exception. C’est une partie fondamentale de notre culture d’entreprise. Et celle-ci se concrétise dans nos actions, comme dans notre organisation.</p>
        <p>Nos collaborateurs sont formés de manière continue et répondent aux critères les plus élevés. Confiance mutuelle et loyauté sont, pour nous, le ciment de toutes nos relations avec autrui, à l’intérieur comme à l’extérieur de l’entreprise.<br /></p>
        <p><em>Stéphane Sertang CEO Ginion Group</em></p>
    </div>
);

const OverOns = ({ language }) => {
    return (
        <>
            <div className="text-banner">
                <div className="container-ginion">
                    <div className="div-block-30">
                        <h1 className="heading-3">WELKOM BIJ GINION</h1>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container-ginion">
                    <div>
                        <div className="w-row">
                            <div className="column w-col w-col-8">
                                <div className="div-block-31">
                                    {language.value === 'nl' && <Nl />}
                                    {language.value === 'fr' && <Fr />}
                                </div>
                            </div>
                            <div className="column-2 w-col w-col-4">
                                <FindVehicle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        language: state.language
    }
};

export default connect(mapStateToProps)(OverOns);