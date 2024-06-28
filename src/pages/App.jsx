import React from 'react';
import '../assets/style/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// Import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import KasaRouter from '../components/KasaRouter';


function App() {

  return (
    <React.Fragment>
      <Router>
        <Header />
        <KasaRouter />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
