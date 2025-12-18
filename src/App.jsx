import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Founders from './components/Founders';
import Differentials from './components/Differentials';
import Specialties from './components/Specialties';
import Services from './components/Services';
import Insurance from './components/Insurance';
import Units from './components/Units';
import Values from './components/Values';
import HowItWorks from './components/HowItWorks';
import Support from './components/Support';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Specialties />
        <Services />
        <Insurance />
        <Units />
        <Values />
        <HowItWorks />
        <Support />
        <FAQ />
        <Founders />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
