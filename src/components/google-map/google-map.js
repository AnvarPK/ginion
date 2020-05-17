import React, { Component, createRef } from 'react'

class GoogleMap extends Component {
    googleMapRef = React.createRef()

    componentDidMount() {
        let GOOGLE_MAP_API_KEY = "AIzaSyA1T3PaRge2PSYsqzfgL452m06bqINSmtI";
        const googleMapScript = document.createElement('script');
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
        googleMapScript.setAttribute("id", "map-script");
        window.document.body.appendChild(googleMapScript)

        googleMapScript.addEventListener('load', () => {
            this.googleMap = this.createGoogleMap()
            this.marker = this.createMarker()
        })
    }
    componentWillUnmount() {
        // window.document.getElementById('map-script').remove();
        const allScripts = document.getElementsByTagName('script');
        [].filter.call(
            allScripts,
            (scpt) => scpt.src.indexOf('maps.googleapis.com/maps') >= 0
        )[0].remove();

        window.google = {};
    }


    createGoogleMap = () =>
        new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 12,
            center: {
                lat: 50.7119565, lng: 4.4004708
            },
            disableDefaultUI: true,
        })

    createMarker = () =>
        new window.google.maps.Marker({
            position: { lat: 50.7119565, lng: 4.4004708 },
            map: this.googleMap,
        })

    render() {
        return (
            <div
                id="google-map"
                ref={this.googleMapRef}
                style={{ width: '100%', height: '100%' }}
            />
        )
    }
}

export default GoogleMap;