import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import About_The_Council from "./Pages/About_The_Council"
import Why_Need_A_Council from "./Pages/Why_Need_A_Council"
import What_We_Do from "./Pages/What_We_Do"
import Who_We_Are from "./Pages/Who_We_Are"
import Stakeholders from "./Pages/Stakeholders"


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-the-council" element={<About_The_Council />} />
      <Route path="/why_need_a_council" element={<Why_Need_A_Council />} />
      <Route path="/what_we_do" element={<What_We_Do />} />
      <Route path="/who_we_are" element={<Who_We_Are />} />
      <Route path="/stakeholders" element={<Stakeholders />} />
    </Routes>
    </div>
  );
}

export default App;
