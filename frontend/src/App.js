import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header.component';
import ScrollUp from './components/scrollUp/scrollUp';
import About from './screens/about/about.component';
import Home from './screens/home/home.component';
import Skills from './screens/skills/skills.component';

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
