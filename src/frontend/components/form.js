import {useRef, useState} from 'react'
import Classes from './css/form.module.css'
import Card from './ui/Card'
import Cities from '../../backend/components/nearCities'
import { MdCompareArrows } from "react-icons/md";
import Vai from './Vai'
import Reduce from './addCode'
import Age from './age'

function Form(props) {

    // geting formula values
    const departInput = useRef();
    const arriveInput = useRef();
    const dateAllerInput = useRef();
    const dateRetourInput = useRef();
    let ville;
    
    function getForm(event) {
        event.preventDefault();
        const entereddepart = departInput.current.value;
        const enteredarrive = arriveInput.current.value;
        const enteredDateAller = dateAllerInput.current.value;
        const enteredDateRetour = dateRetourInput.current.value;
        
        const vacation = {
            depart: entereddepart,
            arrive: enteredarrive,
            DateAller: enteredDateAller,
            DateRetour: enteredDateRetour
        };
        
        //console.log("la vilee = " + vacation.entereddepart)
    }
    
    // useing different states to show api information
    const [showCitys, setShowCitys] = useState(false);
    function showCities() {
        setArriveCitys(false)
        setShowCitys(true)
        setreduceCitys(false)
        setageCitys(false)


    }
    

    const [arriveCitys, setArriveCitys] = useState(false);
    function arriveCities() {
        setArriveCitys(true)
        setShowCitys(false)
        setreduceCitys(false)
        setageCitys(false)
    }

    const [gessCitys, setGessCitys] = useState(false);
    const [getCitys, setGetCitys] = useState(false);
    function gessCities(e) {
        //console.log(e.target.value);
        setGessCitys(true)
        setGetCitys(e.target.value)
    }
    ville = getCitys

    // get other information
    const [vaiCitys, setVaiCitys] = useState(false);
    function vaiCities() {
        setVaiCitys(true)
        setArriveCitys(false)
        setShowCitys(false)
        setGessCitys(false)
        setreduceCitys(false)
        setageCitys(false)
        
    }

    const [reduceCitys, setreduceCitys] = useState(false);
    function reducecities() {
        setreduceCitys(true)
        setArriveCitys(false)
        setShowCitys(false)
        setGessCitys(false)
        setVaiCitys(false)
        setageCitys(false)
    }
    
    const [agecitys, setageCitys] = useState(false);
    function ageCities() {
        setageCitys(true)
        setreduceCitys(false)
        setArriveCitys(false)
        setShowCitys(false)
        setGessCitys(false)
        setVaiCitys(false)
    }

  return (
    <div className="">

        <form onSubmit={getForm} className={Classes.form} title="formula">
            <div >
                <label htmlFor='depart'></label>
                <input type='text' required id='depart' placeholder="Depart" className={Classes.inputs} ref={departInput} onClick={showCities} onChange={gessCities}/>
            </div>

            <div><MdCompareArrows /></div>

            <div >
                <label htmlFor='arrive'></label>
                <input type='text' required id='arrive' placeholder="arrive" className={Classes.inputs} ref={arriveInput}  onClick={arriveCities} onChange={gessCities}/>
            </div>

            <div className={Classes.space} onClick={vaiCities}><span className={Classes.pointer}>+Vai</span></div>
            
            
            <div >
                <label htmlFor='dataAller'></label>
                <input type='date' required id='dataAller' className={Classes.inputs} ref={dateAllerInput} />
            </div>
            <div >
                <label htmlFor='dataRetour'></label>
                <input type='date' id='dataRetour' placeholder="Retour" className={Classes.inputs} ref={dateRetourInput} />
            </div>


            <div >
                <label htmlFor='person'></label>
                <input type='text' id='person' placeholder="1 adulte(26-59)" className={Classes.inputs} onClick={ageCities}/>
            </div>

            <div className={Classes.space} onClick={reducecities}><span className={Classes.pointer}>+Ajouter un code de reduction</span></div>

            <div >
                <button className={Classes.btn}>Rechercher</button>
            </div>

        </form>
        {showCitys ? <div className={Classes.cities}><Card> <Cities  url='https://api.comparatrip.eu/cities/popular/5'/></Card></div> : null}
        {arriveCitys ? <div  className={Classes.cities}><Card><Cities url={`https://api.comparatrip.eu/cities/popular/from/${ville}/5 `} /></Card></div> : null}

        {gessCitys && <div  className={Classes.cities}><Card><Cities url={`https://api.comparatrip.eu/cities/autocomplete/?q=${ville} `} /></Card></div>}

        {vaiCitys ? <div  className={Classes.cities}><Card><Vai /></Card></div> : null}

        {reduceCitys ? <div  className={Classes.cities}><Card><Reduce /></Card></div> : null}

        {agecitys ? <div  className={Classes.cities}><Card><Age /></Card></div> : null}


        
    </div>
  );
}

export default Form;