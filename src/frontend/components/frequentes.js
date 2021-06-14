import Classes from './css//frequences.module.css'
import {useRef} from 'react'

function Frequences() {
    const departInput = useRef();

    function getFrequentes(event) {
        const entereddepart = departInput.current.value;
        console.log(entereddepart)
    }
    return (
            <form onSubmit={getFrequentes} className={Classes.form}>
            <h3>Recherche frequentes</h3>
                <div >
                    <label htmlFor='frequent'></label>
                    <input type='text' required id='frequent' placeholder="Lyon -> paris" className={Classes.inputs} ref={departInput} onClick={getFrequentes} />
                </div>
            <span>L'app leader en Europe pour voyager </span>
            </form>
    );
}

export default Frequences