import logo from './logo.svg';
import './App.css';
import Form from './frontend/components/form'
import Card from './frontend/components/ui/Card'
import Frequentes from './frontend/components/frequentes'
import Section from './frontend/components/ui/section'
import Nsection from './frontend/components/ui/Nsection'
import Image from './frontend/components/image'
import CloseCities from './backend/components/nearCities'
import SpecialCard from './backend/components/ui/specialCard'
import Logos from './frontend/components/LogoImg'
import Carte from './frontend/components/Carte'
import Trajects from './frontend/trajects/Trajects'
import Footer from './frontend/components/footer'

function App() {
  return (
    <div className="App">
      <div className="frontImage">
        <Nsection>
          <h1>Vos billets de train et de bus, en toute simplicité</h1>
          <span>Trainline vous accompagne de la réservation jusqu’à votre arrivée à destination. Consultez les dernières informations.</span>
        </Nsection>

        <Section>
          <Card>
            <Form />
          </Card>
          <Card>
            <Frequentes />
          </Card>
        </Section>

        <Logos />

      </div>
      <Carte />
      <Trajects />
      <Footer />
    </div>
  );
}

export default App;
