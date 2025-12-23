import { SnowEffect } from './components/SnowEffect';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Leadership } from './components/Leadership';
import { Applicants } from './components/Applicants';
import { Students } from './components/Students';
import { News } from './components/News';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <SnowEffect />
      <Header />
      
      <main className="pt-20">
        <Hero />
        <About />
        <Programs />
        <Leadership />
        <Applicants />
        <Students />
        <News />
        <Contacts />
      </main>
      
      <Footer />
    </div>
  );
}
