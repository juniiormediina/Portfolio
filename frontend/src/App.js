import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ScrollUp from './components/scrollUp/scrollUp';
import About from './screens/about/about';
import Home from './screens/home/home';
import Skills from './screens/skills/skills';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
