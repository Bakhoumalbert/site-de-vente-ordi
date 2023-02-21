import { useState } from 'react';
import '../styles/Panier.css';

function Panier({panier, updatePanier}) {
  const [isOpen, setIsOpen] = useState(false);  
  const total = panier.reduce((somme, currentOrdi) => somme + currentOrdi.amount * currentOrdi.price)
  return isOpen ? (
    <div className="cls-panier">
       <button onClick={() => setIsOpen(false)}>Fermer</button>
      <h1>Mon panier</h1>
      <h1>Total = {total}</h1>
      
    </div>
  ) :  <button onClick={() => setIsOpen(true)}>Fermer</button>
}
export default Panier