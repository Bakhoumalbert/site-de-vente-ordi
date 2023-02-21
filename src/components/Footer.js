
import { useState } from 'react';
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('');
    
    function changeInput(e){
        setInputValue(e.target.value)
    }
    function excpetionInput(){
        if(!inputValue.includes('@')){
            alert('Attention un mail doit contenir une @')
        }
    }
    return(
        <footer className='cls-footer'>
            <div className='cls-footer-elem'>
                Pour plus d'informations sur nos produits
            </div>
            <div className='cls-footer-elem'> 
                Laissez-nous votre mail :
            </div>
            <div className='cls-input'>
            <input placeholder='Entrer votre mail...'
                   onChange={changeInput}
                   value={inputValue}
                   onBur={excpetionInput}
            />
            <button onClick={() => alert(inputValue)}>Envoyer</button>
            </div>
        </footer>
    )
}
export default Footer