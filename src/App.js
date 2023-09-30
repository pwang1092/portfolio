//import './App.css';
import Navbar from "./Component/navbar.js";
import Intro from "./Component/intro.js"; 
import Skills from "./Component/about.js";
import Works from "./Component/works.js"; 
import Contact from "./Component/contact.js";
import Footer from "./Component/footer.js";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
