import './App.css';
import Navbar from './navbar'
import Header from './header';
import Howwork from './howwork';
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
function Home() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Howwork/>
      <AboutUs/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Home;
