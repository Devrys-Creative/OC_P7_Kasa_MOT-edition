
import '../assets/style/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

// Import components
import Header from '../components/Header/index.tsx';
import Footer from '../components/Footer/index.tsx';
import KasaRouter from '../components/KasaRouter/index.tsx';


function App() {

  return (
    <Router>
      <Header />
      <KasaRouter />
      <Footer />
    </Router>
  );
}

export default App;
