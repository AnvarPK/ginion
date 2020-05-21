import React from 'react';
import VectorW from './Vector.svg';

const garantie = {
    nl: [
        "Een persoonlijke offerte",
        "Leasing & financiering op maat",
        "Een breed gamma aan merken en modellen",
        "Competitieve marktconforme prijzen",
        "360° technische en optische inspectie van de auto",
        "Mogelijkheid om een proefrit te maken",
        "Onze voertuigen zijn onmiddellijk beschikbaar"
    ],
    fr: [
        "Une offre personnalisée",
        "Leasing & financement sur mesure",
        "Une large gamme de marques et de modèles",
        "Prix compétitifs",
        "Contrôle technique et optique de la voiture à 360°",
        "Possibilité de faire un essai sur route",
        "Voitures disponibles immédiatement"
    ]
}
const Warranties = ({ lan }) => {
    return (<>
        <div className="ginion-guranties">
            <div className="div-block-13 has-bg"></div>
            <div className="div-block-13">
                <div className="div-block-14">
                    <div className="div-block-15">
                        <h3 className="h3">ONZE Ginion Garanties</h3>
                        <div>
                            <ul className="w-list-unstyled">
                                {
                                    garantie[lan.value].map(item => (
                                        <li key={item}>
                                            <div className="div-block-16"><img src={VectorW} alt="" className="image-5" />
                                                <div className="div-block-17">
                                                    <div className="text-block-3">{item}</div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Warranties;