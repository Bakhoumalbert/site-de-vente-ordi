import '../styles/Produitobjet.css'

function Produitobjet({name, category, id, cover, price}) {
    return(
        <li className='cls-ordi'> 
            <span className='cls-price'>{price}FCFA</span>
            <img className='cls-img' src={cover} alt={`${name} cover`} />
            <span className='cls-name'>{name}</span>
        </li>

    )
}
export default Produitobjet
