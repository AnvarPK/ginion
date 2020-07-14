import React from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import FindVehicle from '../../components/find-vehicle';
import GoogleMap from '../../components/google-map';
import Formm from '../../components/form';
const Nl = () => (
    <>
        <p>Steeds meer klanten financieren een auto bij ons omdat de intrestrate zeer interessant is.</p>
        <p>Dankzij onze verschillende financieringsformules bieden we u een voorstel op maat aan tegen de beste voorwaarden zodat de wagen die u zoekt binnen handbereik is. Of u nu kiest voor een lening met maandelijkse aflossingen* of een financiële leasing, neem nu contact op met ons team voor een persoonlijk financieringsaanbod.</p>
        <p>Vraag hier uw simulatie aan, onze verkopers nemen zo snel mogelijk contact op met u.</p>
        <p>* Let op, geld lenen kost ook geld.</p>

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
        {/* <p>Kunnen we een knop toevoegen om een simulatie te kunnen aanvragen?
        </p>
        <p>Mail moet hier terecht: <a href="mailto:info@ginionusedcars.com" >info@ginionusedcars.com</a></p> */}
    </>
)


const fn = {
    nl: "FINANCIERING", fr: "Financement"
}


const Financiering = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.language.value === "nl" ? "Financiering  | Ginion Used Cars" : "Financement - Ginion Used Cars"}</title>
                <meta name="description" content={props.language.value === "nl" ? "Dankzij onze financieringsformules bieden we u een voorstel op maat aan tegen de beste voorwaarden zodat de wagen die u zoekt binnen handbereik is." : "Grâce à nos formules de financement, profitez d’une offre sur mesure aux meilleures conditions afin que la voiture que vous recherchez soit à portée de main."} />
            </Helmet>
            <div className="text-banner">
                <div className="container-ginion">
                    <div className="div-block-30">
                        <h1 className="heading-3">{fn[props.language.value]}</h1>
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

                                        <Formm lan={props.language.value} />

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