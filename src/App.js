import React, { Suspense } from 'react';
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

const GoHome = () => (<Redirect to='/nl' />);

function App() {
  const OnsAanbod = usePrefetch(ImportOnsAanbod);
  const OnsAanbodDetail = usePrefetch(ImportOnsAanbodDetail);
  const GarantiesDiensten = usePrefetch(ImportGarantiesDiensten);
  const Financiering = usePrefetch(ImportFinanciering);
  const OverOns = usePrefetch(ImportOverOns);
  const Contact = usePrefetch(ImportContact);


  return (
    <Router basename='/ginion'>
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

            <Route exact path="/fr" component={Home} />
            <Route exact path="/fr/ons-aanbod" component={OnsAanbod} />
            <Route path="/fr/ons-aanbod/:id" component={OnsAanbodDetail} />
            <Route path="/fr/garanties-diensten" component={GarantiesDiensten} />
            <Route path="/fr/financiering" component={Financiering} />
            <Route path="/fr/over-ons" component={OverOns} />
            <Route path="/fr/contact" component={Contact} />

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
    vehicles: getVisibleVehicles(state.vehicles, state.filters)
  }
};

export default connect(mapDispatchToProps)(App);