import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

export default () => (
    <div className="loader-main">
        <Loader
            type="MutatingDots"
            color="#9b9b9b"
            height={100}
            width={100}
            timeout={3000}
            secondaryColor="#0584a0"
        />
    </div>
)