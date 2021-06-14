import './css/Carte.css'
import Section from './ui/section'

function BuyCard()
{
    return <div className="carte-component">
        <Section>
        <div className="carte-component-logo">
            <img alt="carte" src="https://static.trainlinecontent.com/content/WEB/images/home/railcard-banner-graphic.svg" />
        </div>
        <div>
            <h2>Voyagez à prix réduit</h2>
            <p>Avec les cartes SNCF Avantage ou Liberté, bénéficiez d'au</p>
            <p> moins 30 % de réduction, y compris sur les Prem's.</p>

            <button className="carte-component-btn">Acheter une carte</button>
        </div>
        </Section>
    </div>
}

export default BuyCard;