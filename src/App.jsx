import MainHero from "./Hero/MainHero";
import Footer from "./Utils/Footer";
import NotFound from "./Utils/NotFound";
import SkillsPage from "./Skills/SkillsPage";
import Projects from "./Projects/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainHero />
              <SkillsPage/>
              <Projects/>
              <Footer />
              
            </>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
