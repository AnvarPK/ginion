import React from 'react';
import {
    NavLink,
} from "react-router-dom";

export default () => (
    <div>
        <div className="text-banner">
            <div className="container-ginion">
                <div className="div-block-30">
                    <h1 className="heading-3">Page Not Found</h1>
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
                                    <p>Sorry, there is nothing to see here.</p>
                                    <p><NavLink to="/">Back to Home</NavLink></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
