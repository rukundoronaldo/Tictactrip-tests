import './css/footer.css'
import Section from './ui/section'
import { MdAdd } from "react-icons/md";

function Footer()
{
 return(
     <div>
        
         <div className="big-div"  >
             <div className="list1">
                 <ul className="lists" >
                     <li>Contacter Trainline</li>
                     <li>Plan du Site</li>
                     <li>Qui sommes-nous ?</li>
                     <li>Informations presse</li>
                     <li>Pour les entreprises</li>
                     <li>Offres d'emploi</li>
                     <li>Sites Trainline</li>
                     <li>CGV and Informations légales</li>
                     <li>Données personnelles / Cookies</li>
                 </ul>
             </div>
             <div className="list2">
                 <ul className="lists">
                     <li><MdAdd/> Aide et questions fréquentes</li>
                     <li><MdAdd/> Compagnies de train et de bus</li>
                     <li><MdAdd/> Trajets populaires</li>
                     <li><MdAdd/> Horaires de trains nationaux</li>
                     <li><MdAdd/> Horaires de trains internationaux</li>
                     <li><MdAdd/> Destinations populaires & gares</li>
                 </ul>
             </div>
        </div>

        <div></div>
        <div className="small">
            <small >Copyright © 2021 Trainline.com Limited ou ses entreprises affiliées. Tous droits réservés.<br />
            Trainline.com Limited est immatriculée en Angleterre et au Pays de Galles. Numéro d'immatriculation : 3846791. Siège social : 120 Holborn, London EC1N 2TD, Royaume-Uni. Numéro de TVA : 791.<br />7261 06.</small>
        </div>
     </div>
 )
}

export default Footer;