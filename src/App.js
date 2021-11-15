import Header from "./containers/Header"
import Benefits from "./containers/Benefits"
import Course from "./containers/Course"
import PartnersSlider from "./containers/Partners"
import Certificate from './containers/Certificate'
import Developers from "./containers/Developers"
import Register from "./containers/Register"
import Footer from "./containers/Footer"



function App() {
  
  return (
    <div className="App">
      <Header />
      <Benefits />
      <Course />
      <PartnersSlider />
      <Certificate />
      <Developers />
      <Register />
      <Footer />
      
    </div>
  );
}

export default App;
