import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { FounderMessage } from './components/FounderMessage';
import { Team } from './components/Team';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { Awards } from './components/Awards';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutUs />
      <FounderMessage />
      <Team />
      <Services />
      <Testimonials />
      <Portfolio />
      <Awards />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
