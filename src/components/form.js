import React from "react";

const Formm = () => (
    <>
        <div className="div-block-36 form-style" >
            <div className="div-block-35">
                <h5 className="heading-4">Generate simulation</h5>
            </div>
            <form >
                <div className="form-block w-form">
                    <div className="div-block-37" >
                        <label className="field-label">Name</label>
                        <input name="name" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >Email</label>
                        <input name="email" type="email" />
                    </div>
                    <div className="div-block-37" >
                        <label className="field-label" >Amount</label>
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

export default Formm;
