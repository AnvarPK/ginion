import React from 'react'
import {
    Link
} from "react-router-dom";

const SubmitButton = ({ mk, ml, language }) => {
    const url = `/${language.value}/ons-aanbod?make=${mk}&model=${ml}`;
    return (<Link to={url} className="submit-button w-button">Toon<span style={{ color: 'transparent' }}>f</span>modellen</Link>)
}

export default SubmitButton