import React, { Component } from "react";
const omit = (obj, omitKey) =>
    Object.keys(obj).reduce((result, key) => {
        if (key !== omitKey) {
            result[key] = obj[key];
        }
        return result;
    }, {});

const overlayStyles = {
    position: "absolute",
    filter: "blur(1px)",
    transition: "opacity ease-in 1000ms",
    clipPath: "inset(0)"
};

export default class ProgressiveImage extends Component {
    constructor(props) {
        super(props);
        this.state = { highResImageLoaded: false };
    }
    render() {
        const { overlaySrc } = this.props;
        const { highResImageLoaded } = this.state;
        let filteredProps = omit(this.props, "overlaySrc");
        return (
            <span className="pro-images">
                <img
                    {...filteredProps}
                    onLoad={() => {
                        this.setState({ highResImageLoaded: true });
                    }}
                    ref={img => {
                        this.highResImage = img;
                    }}
                    src={this.props.src}
                    alt="img"
                />
                <img
                    {...filteredProps}
                    className={`${this.props.className} overlay-img ${overlayStyles}`}
                    {...highResImageLoaded && { style: { opacity: "0" } }}
                    src={overlaySrc}
                    alt="img"
                />
            </span>
        );
    }
}