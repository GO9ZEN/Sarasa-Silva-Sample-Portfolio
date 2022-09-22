import AboutSection from './AboutSection/AboutSection';
import './App.css';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeroSection from './HeroSection/HeroSection';
import ServicesSection from './ServicesSection/ServicesSection';
import WorkSection from './WorkSection/WorkSection';
import ScrollUpButton from "react-scroll-up-button";
import ScrollUpButtonCustom from './ScrollUpButtonCustom/ScrollUpButtonCustom';


function App() {
  return (
    <div className="App">
      
      <div>
        <ScrollUpButton
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
          AnimationDuration={1000}
        >
          <ScrollUpButtonCustom />
        </ScrollUpButton>
      </div>

      {/* <Page loader={"spin"} color={"#D61C4E"} size={9}> */}
      <Header />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <Footer />
      {/* </Page> */}

    </div>
  );
}

export default App;

// sarasa-silva-sample-portfolio