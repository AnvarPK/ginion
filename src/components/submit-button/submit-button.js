import React from 'react'
import {
    Link
} from "react-router-dom";

const SubmitButton = ({ mk, ml, language }) => {
    const url = `/${language.value}/ons-aanbod?make=${mk}&model=${ml}`;
    return (<Link to={url} className="submit-button w-button">
        {language.value === "nl" ? "Toon modellen" : "Voir les modèles"}
    </Link>)
}

export default SubmitButton