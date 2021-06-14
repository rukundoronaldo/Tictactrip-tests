import Fr from './francetrjs'
import '../components/css/trajects.css'

function Trajects()
{
 return(
     <div>
         <div className="center">

            <h2 className="title">Trajets populaires</h2>
            <p className="">Choisissez votre prochaine destination en France ou en 
            Europe et achetez vos billets en ligne en quelques clics.
            Vous ne savez pas encore où aller ? Découvrez nos idées de
            voyage.</p>
         </div>

         <div className="freurodiv">
             <ul className="freuro">
                 <li><h3>France</h3></li>
                 <li><h3>Europe</h3></li>
             </ul>
         </div>

        <Fr />

     </div>
     
 )
}

export default Trajects;