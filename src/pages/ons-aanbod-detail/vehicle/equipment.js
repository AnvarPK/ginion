import React from 'react';
import VectorI from './Vector-4.svg';

const Equipment = ({ options, lan }) => (
    <div className="div-block-47">
        <h5 className="heading-6 text-block-7">{lan === "nl" ? "UITRUSTING" : "Equipements"}</h5>
        <div>
            <ul className="list-2 w-list-unstyled">
                {[...options].map((option, i) => (
                    <li className="list-item" key={i}>
                        <div className="div-block-48"><img src={VectorI} alt="" className="image-10" />
                            <div className="div-block-49">
                                <div className="text-block-13 text-black">{option}</div>
                            </div>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    </div>
);

export default Equipment;