import React from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./static.css";

const Static = () => {
    return (
        <div>
            <div className="text-banner">
                <div className="container-ginion">
                    <div className="div-block-30">
                        <div className="loader-inner">
                            <Loader
                                type="MutatingDots"
                                color="#9b9b9b"
                                height={100}
                                width={100}
                                timeout={3000}
                                secondaryColor="#0584a0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Static;