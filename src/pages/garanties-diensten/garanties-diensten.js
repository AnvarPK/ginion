import React from 'react';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import Vector from './Vector-2.svg';
import FindVehicle from '../../components/find-vehicle';
import GoogleMap from '../../components/google-map';

const Nl = () => (
    <div className="div-block-31">

        <div className="div-block-34">
            <div className="text-block-7">GARANTIES</div>
            <p>Ginion Used Cars biedt elke auto aan met een garantie van 12 maanden. Al onze voertuigen werden grondig gecontroleerd door onze eigen specialisten. Na een uitvoerige technisch en optisch onderzoek garanderen wij de verkoop van kwaliteitswagens voor een optimaal rijplezier.</p>
            {/* <ul className="list w-list-unstyled">
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8"><strong>MINI Used Car Next</strong> : deze auto’s beschikken over een garantie van 24 maanden</div>
                        </div>
                    </div>
                </li>
            </ul> */}
        </div>
        <div className="div-block-34">
            <div className="text-block-7">Eigen werkplaats</div>
            <p>Ginion Used Cars heeft geïnvesteerd in een professioneel uitgeruste werkplaats in zijn concessie. Onze hoogopgeleide technici controleren daar al onze aangekochte wagens volgens de hoogste kwaliteitsstandaard. Zo zijn wij er zeker van dat we enkel de beste tweedehandswagens aanbieden. U kan bij ons ook terecht voor onderhoud en herstellingen.</p>
            <p>Ontdek de aankoopvoordelen van een Ginion Used Cars gecertificeerde tweedehands auto:</p>
            <ul className="list w-list-unstyled">
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Een persoonlijke offerte</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Leasing &amp; financiering op maat<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Een breed gamma aan merken en modellen<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Competitieve marktconforme prijzen<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">360° technische en optische inspectie van de auto<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Mogelijkheid om een proefrit te maken<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Onze voertuigen zijn onmiddellijk beschikbaar<br /></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
)

const Fr = () => (
    <div className="div-block-31">

        <div className="div-block-34">
            <div className="text-block-7">GARANTIES</div>
            <p>Toutes nos voitures d’occasion certifiées Ginion Used Cars bénéficient d’une garantie complète de 12 mois. Elles ont été minutieusement inspectées par nos techniciens spécialisés et expérimentés. Après des examens techniques et optiques approfondis nous garantissons la vente de véhicules de qualité pour un plaisir de conduite optimal.</p>
            {/* <ul className="list w-list-unstyled">
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8"><strong>MINI Used Car Next</strong> : deze auto’s beschikken over een garantie van 24 maanden</div>
                        </div>
                    </div>
                </li>
            </ul> */}
        </div>
        <div className="div-block-34">
            <div className="text-block-7">SERVICES</div>
            <p>Ginion Used Cars a investi dans un atelier équipé professionnellement. C’est à cet endroit que toutes nos voitures achetées sont vérifiées par nos techniciens spécialement formés. De cette façon, nous sommes sûrs de proposer les meilleures voitures d'occasion. Vous pouvez également bénéficier de notre atelier pour l’entretien et les réparations.<br /></p>
            <p>Découvrez les avantages de l’achat d’une voiture d’occasion certifiée Ginion Used Cars :</p>
            <ul className="list w-list-unstyled">
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Une offre personnalisée</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Leasing &amp; Financement sur mesure<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Une large gamme de marques et de modèles<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Prix compétitifs<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Contrôle technique et optique de la voiture à 360°<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Possibilité de faire un essai sur route<br /></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="div-block-32"><img src={Vector} alt="" className="image-8" />
                        <div className="div-block-33">
                            <div className="text-block-8">Voitures disponibles immédiatement<br /></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </div>
)

const gr = {
    nl: "Garanties & Diensten", fr: "Garanties & services"
}



const GarantiesDiensten = (props) => {
    return (
        <>
            <Helmet>
                <title>{props.language.value === "nl" ? "Garantie en diensten | Ginion Used Cars" : "Garanties et services - Ginion Used Cars"}</title>
                <meta name="description" content={props.language.value === "nl" ? "Ginion Used Cars biedt elke auto aan met een garantie van 12 maanden. Al onze voertuigen werden grondig gecontroleerd door onze eigen specialisten." : "Toutes les voitures Ginion Used Cars bénéficient de 12 mois de garantie. Tous nos véhicules ont été minutieusement contrôlés par nos propres spécialistes."} />
            </Helmet>
            <div className="text-banner">
                <div className="container-ginion">
                    <div className="div-block-30">
                        <h1 className="heading-3">{gr[props.language.value]}</h1>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container-ginion">
                    <div>
                        <div className="w-row">
                            <div className="column w-col w-col-8">
                                {props.language.value === 'nl' && <Nl />}
                                {props.language.value === 'fr' && <Fr />}
                            </div>
                            <div className="w-col w-col-4">
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

export default connect(mapStateToProps)(GarantiesDiensten);