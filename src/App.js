import './App.css';
import Navigation from './components/header/Navigation';
import "../src/components/header/Navigation.css"
import Home from './components/header/Home';
import Skills from './components/header/Skills';
import Work from './components/header/Work';
import About from './components/header/About';
import Contact from './components/header/Contact';
import Footer from './components/header/Footer';

function App() {
  return (
    <div className="App">
      <div className="l-main">

  
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    
     
    </div>
  );
}

export default App;
