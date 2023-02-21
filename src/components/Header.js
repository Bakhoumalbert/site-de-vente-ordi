import logo from '../Mesimages/monlogo.png'
import '../styles/Header.css'

function Header() {
    return(
        <div className='lcs-header'>
            <img src={logo} alt='logo du site' className='lcs-logo'/>
            <h1 className='lcs-title'>Bienvenue sur mon site de vente </h1>
        </div>
    )
}
export default Header