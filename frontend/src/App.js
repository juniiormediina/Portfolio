import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollUp from './components/scrollUp/ScrollUp';
import About from './screens/about/About';
import Home from './screens/home/Home';
import Portfolio from './screens/portfolio/Portfolio';
import Skills from './screens/skills/Skills';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Portfolio />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
