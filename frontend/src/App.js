import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ScrollUp from './components/scrollUp/scrollUp';
import About from './screens/about/about';
import Home from './screens/home/home';
import Portfolio from './screens/portfolio/portfolio';
import Skills from './screens/skills/skills';

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
