import DetailInfo from './components/DetailInfo';
import Expectations from './components/Expectations';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Prices from './components/Prices';
import PrivateClubIs from './components/PrivateClubIs';
import Warning from './components/Warning';
import WhoYouAre from './components/WhoYouAre';

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Expectations />
            <HowItWorks />
            <WhoYouAre />
            <PrivateClubIs />
            <Prices />
            <DetailInfo />
            <Warning />
            <Footer />
        </div>
    );
}

export default App;
