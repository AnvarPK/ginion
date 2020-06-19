import React from "react";

const NlForm = () => (
    <>
        <div className="div-block-36 form-style" >
            <div className="div-block-35">
                <h5 className="heading-4">Simulatie aanvragen</h5>
            </div>
            <form >
                <div className="form-block w-form">
                    <div className="div-block-37" >
                        <label className="field-label">Naam</label>
                        <input name="first-name" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label">Achternaam</label>
                        <input name="last-name" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >Email</label>
                        <input name="email" type="email" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >TELEFOONNUMMER</label>
                        <input name="phone" type="number" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >Bedrag</label>
                        <input name="amount" type="number" />
                    </div>
                    <div className="div-block-37" >
                        <button type="submit" >Simulatie aanvragen</button>
                    </div>
                </div>
            </form>
        </div>
    </>
);
const FrForm = () => (
    <>
        <div className="div-block-36 form-style" >
            <div className="div-block-35">
                <h5 className="heading-4">Demander une simulation</h5>
            </div>
            <form >
                <div className="form-block w-form">
                    <div className="div-block-37" >
                        <label className="field-label">Nom</label>
                        <input name="first-name" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label">Prénom</label>
                        <input name="last-name" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >Email</label>
                        <input name="email" type="email" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >Numéro de téléphone</label>
                        <input name="phone" type="number" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >Montant</label>
                        <input name="amount" type="number" />
                    </div>
                    <div className="div-block-37" >
                        <button type="submit" >Demander une simulation</button>
                    </div>
                </div>
            </form>
        </div>
    </>
);

const Formm = ({ lan }) => (<>
    {lan === "nl" ? <NlForm /> : <FrForm />}
</>);

export default Formm;
