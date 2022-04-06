import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../src/pages/Home";
import TravelGuide from "../src/pages/TravelGuide";
import VisaGuide from "../src/pages/VisaGuide";
import './index.css'

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travelguide" element={<TravelGuide />} />
        <Route path="/visaguide" element={<VisaGuide />} />
      </Routes>
   </Router>
  );
}

export default App;
