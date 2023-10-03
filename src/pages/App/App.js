import './App.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Home from '../../pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (

    // BEM
    <div className='app'>
      <Router>
        <Header />
        <Home />
        <Footer />
        {/* Banner */}
          {/* Search */}

        {/* Cards */}
        
        {/* Footer */}
        
      {/* Search Page */}
        {/* Header */}
      </ Router>
    </div>
  );
}