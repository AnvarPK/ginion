import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import usePrefetch from './usePrefetch';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import getVisibleVehicles from './redux/selectors/vehicles';
import ScrollToTop from './components/scroll-top';
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import Static from "./components/static";
import NotFoundRoute from './pages/not-found-route';

const ImportOnsAanbod = () => import('./pages/ons-aanbod');
const ImportOnsAanbodDetail = () => import('./pages/ons-aanbod-detail');
const ImportGarantiesDiensten = () => import('./pages/garanties-diensten');
const ImportFinanciering = () => import('./pages/financiering');
const ImportOverOns = () => import('./pages/over-ons');
const ImportContact = () => import('./pages/contact');
const ImportCookies = () => import('./pages/cookies');

const GoHome = () => (<Redirect to='/fr' />);

function App({ lan }) {
  const OnsAanbod = usePrefetch(ImportOnsAanbod);
  const OnsAanbodDetail = usePrefetch(ImportOnsAanbodDetail);
  const GarantiesDiensten = usePrefetch(ImportGarantiesDiensten);
  const Financiering = usePrefetch(ImportFinanciering);
  const OverOns = usePrefetch(ImportOverOns);
  const Contact = usePrefetch(ImportContact);
  const Cookies = usePrefetch(ImportCookies);

  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.id="cookieyes";
    s.src = lan.value === "nl"?"https://cdn-cookieyes.com/client_data/93c740fa32c6d9debb91faa8.js":"https://cdn-cookieyes.com/client_data/ca542de5f9b63d04747782c5.js";
    document.head.appendChild(s);
  },[])
  return (
    <Router   >
      {/* basename='/ginion' */}

      <ScrollToTop />
      <Header />
      <div className="contet-sec">
        <Suspense fallback={<Static />}>
          <Switch>

            <Route exact path="/" component={GoHome} />
            <Route exact path="/nl" component={Home} />
            <Route exact path="/nl/ons-aanbod" component={OnsAanbod} />
            <Route path="/nl/ons-aanbod/:id" component={OnsAanbodDetail} />
            <Route path="/nl/garanties-diensten" component={GarantiesDiensten} />
            <Route path="/nl/financiering" component={Financiering} />
            <Route path="/nl/over-ons" component={OverOns} />
            <Route path="/nl/contact" component={Contact} />
            <Route path="/nl/cookies" component={Cookies} />

            <Route exact path="/fr" component={Home} />
            <Route exact path="/fr/nos-offres" component={OnsAanbod} />
            <Route path="/fr/nos-offres/:id" component={OnsAanbodDetail} />
            <Route path="/fr/garanties-services" component={GarantiesDiensten} />
            <Route path="/fr/financement" component={Financiering} />
            <Route path="/fr/a-propos-de-nous" component={OverOns} />
            <Route path="/fr/cookies" component={Cookies} />

            <NotFoundRoute />
          </Switch>
        </Suspense>
      </div>
      <Footer />
    </Router>
  );
}

const mapDispatchToProps = (state) => {
  return {
    vehicles: getVisibleVehicles(state.vehicles, state.filters),
    lan: state.language
  }
};

export default connect(mapDispatchToProps)(App);
