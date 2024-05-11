import Layout from "./components/layout/layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const[theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <ToastContainer />
      <MobileNav />
      <Layout />
      <div className="container">
   
      </div>
      <About />
      <Education />
      <Techstack />
      <Projects />
      <Contact />
      <div className="footer mb-3 ms-3">
        <Tada>
          <h4 className="text-center">Made With 😍 Sathiyamoorthi &copy; 2024</h4>
        </Tada>  
      </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
      
    </>
  );
}

export default App;