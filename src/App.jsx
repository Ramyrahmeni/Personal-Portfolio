import "./App.css";
import { Routes, Route } from "react-router-dom";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import LandingPage from "./pages/LandingPage";
import Layout from "./Layout";
import Projects from "./pages/Projects";
import AreasOfInterest from "./pages/AreasOfInterests";
import Honors from "./pages/Honors"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/about" element={<Layout />}>
          <Route index element={<About />} />
        </Route>
        <Route path="/honors" element={<Layout />}>
          <Route index element={<Honors />} />
        </Route>
        <Route path="/areasofinterest" element={<Layout />}>
          <Route index element={<AreasOfInterest />} />
        </Route>
        <Route path="/experience" element={<Layout />}>
          <Route index element={<Experience />} />
        </Route>
        <Route path="/projects" element={<Layout />}>
          <Route index element={<Projects />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
