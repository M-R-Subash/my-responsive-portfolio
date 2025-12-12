import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CustomCursor from './components/CustomCursor';
import Snowfall from 'react-snowfall'

const App = () => {
  return (
    <>
        <Snowfall color="#006eff" changeFrequency={2}/>
        <CustomCursor/>
        <Navbar />
        <Info />
        <Education />
        <Skills />
        <Projects />
        <Footer/>
    </>
  );
};

export default App;