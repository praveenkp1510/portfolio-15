import { Routes, Route } from "react-router-dom";
import { Intro } from "./Components/Intro";
import { Projects } from "./Components/Projects";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className="bg-black min-w-screen max-w-screen">
      <Navbar />
      <Routes>
        <Route path="/portfolio-15/" element={<Intro />} />
        <Route path="/portfolio/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
