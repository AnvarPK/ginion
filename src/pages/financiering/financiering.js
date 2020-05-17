import React from 'react';
import { connect } from 'react-redux';
import FindVehicle from '../../components/find-vehicle';
import GoogleMap from '../../components/google-map';

const Nl = () => (
    <>
        <p>Meer en meer klanten financieren een auto bij ons omdat de intrestrate zeer schappelijk is op de
markt.</p>
        <p>Om u te helpen bij het aanschaffen van de auto die u zoekt, biedt Ginion Used Cars u verschillende
financieringsformules aan, aangepast aan uw situatie en tegen de beste voorwaarden.</p>
        <p>Of u nu kiest voor een maandelijkse aflossingslening of een financiële leasing, neem nu contact op
met ons team voor een persoonlijk financieringsaanbod.</p>
        <p>Vraag hier uw simulatie aan, onze verkopers nemen zo snel mogelijk contact op met u.</p>
        <p>* Let op, geld lenen kost ook geld.</p>
        <p>Kunnen we een knop toevoegen om een simulatie te kunnen aanvragen ?</p>
        <p>Mail moet hier terecht: <a href="mailto:info@ginionusedcars.com" >info@ginionusedcars.com</a></p>
    </>
)

const Fr = () => (
    <>
        <p>De plus en plus de clients financent une voiture avec nous car le taux d&#39;intérêt est très raisonnable
sur le marché.</p>
        <p>Afin de vous aider à acquérir la voiture que vous souhaitez, Ginion Used Cars vous propose
différentes formules de financement adaptées à votre situation et aux meilleures conditions.</p>
        <p>Que vous optiez pour un emprunt à remboursement mensuel ou pour un leasing financier, prenez
dès maintenant contact avec notre équipe afin d’obtenir une offre de financement personnalisée.</p>
        <p>*Attention, emprunter de l’argent coûte aussi de l’argent.</p>
        <p>Kunnen we een knop toevoegen om een simulatie te kunnen aanvragen?
        </p>
        <p>Mail moet hier terecht: <a href="mailto:info@ginionusedcars.com" >info@ginionusedcars.com</a></p>
    </>
)

const Financiering = (props) => {
    return (
        <>
            <div className="text-banner">
                <div className="container-ginion">
                    <div className="div-block-30">
                        <h1 className="heading-3">FINANCIERING</h1>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container-ginion">
                    <div>
                        <div className="w-row">
                            <div className="column w-col w-col-8">
                                <div className="div-block-31">
                                    <div className="div-block-34">
                                        {props.language.value === 'nl' && <Nl />}
                                        {props.language.value === 'fr' && <Fr />}
                                        
                                    </div>
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

export default connect(mapStateToProps)(Financiering);