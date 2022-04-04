import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../src/pages/Home";
import TravelGuide from "../src/pages/TravelGuide";
import './index.css'

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travelguide" element={<TravelGuide />} />
      </Routes>
   </Router>
  );
}

export default App;
