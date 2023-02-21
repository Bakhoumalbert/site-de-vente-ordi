import '../styles/Produits.css'
import { listProduits } from '../donnees/Listproduits.js'
import ProduitObjet from './Produitobjet'
import { useState } from 'react'
import Categories from './Categories'


function Produits({panier, updatePanier}) {
    const [activeCategory, setActiveCaterory] =  useState('')
    const categories = listProduits.reduce(
        (cat, listcat) => cat.includes(listcat.category) ? cat : 
        cat.concat(listcat.category), 
        []
    )

    function ajoutAuPanier(name, price){
        const currentOrdiAjout = panier.find((ordi) => ordi.name = name)
        if(currentOrdiAjout){
            const filtreCurrentOrdi = panier.filter((ordi) => ordi.name !== name)
            updatePanier([
                ...filtreCurrentOrdi,
                { name, price, amount: currentOrdiAjout.amount + 1}
            ])

        } else {
            updatePanier([
                ...panier,
                { name, price, amount: 1}
            ])
        }
    }
    
    return (
        <div className='cls-ordi'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCaterory}
				activeCategory={activeCategory}
			/>
            <ul className='cls-prod'>
                {listProduits.map(({name, category, id, cover, price}) => 
                    !activeCategory || activeCategory === category ? (
                    <div key={id}>
                        <ProduitObjet
                            name={name}
                            category = {category}
                            cover = {cover}
                            price = {price}
                />
                <button onClick={() => ajoutAuPanier(name, price)}>Ajouter</button>
                </div>
                    ) : null
            )}
        </ul>
        </div>
    )
}
export default Produits