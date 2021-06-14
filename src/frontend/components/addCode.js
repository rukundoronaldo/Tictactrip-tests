function AddCode() 
{
 return (
     <div>

         <div>
            <h2>Ajouter un code SNCF</h2>
            <button>Annuler</button>
         </div>
         <form>
            <div >
                <label htmlFor='code'>Code de réduction</label>
                <input type='text' required id='code'/>
            </div>
            <div >
                <label htmlFor='passage'>Passager</label>
                <select>
                    <option>Passager 1 (adulte)</option>
                </select>
            </div>
            <button>OK</button>
         </form>
     </div>
 )
}

export default AddCode;