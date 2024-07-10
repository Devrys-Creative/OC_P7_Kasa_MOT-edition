
import '../assets/style/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// Import components
import Header from '../components/Header';
import Footer from '../components/Footer';
import KasaRouter from '../components/KasaRouter';


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
