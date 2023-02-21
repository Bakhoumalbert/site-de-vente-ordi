import { useState } from 'react';
import '../styles/App.css'
// import Categories from './Categories';
import Footer from './Footer';
import Header from "./Header";
import Panier from "./Panier";
import Produits from "./Produits";

function App() {
  const [panier, updatePanier] = useState([]);
  return (
    <div>
      <Header />
      {/* <Categories/> */}
      <div className="cls-catal">
        <Panier panier={panier} updatePanier={updatePanier} />
        <Produits />
      </div>
      <Footer />
    </div>
  )

}

export default App;


