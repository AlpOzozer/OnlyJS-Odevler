import './App.css';
import "../src/sass/style.scss";
import Navbar from "../src/sections/Navbar/Navbar.jsx";
import Hero from "../src/sections/Hero/Hero.jsx";
import Features from "../src/sections/Features/Features.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  )
}

export default App;
