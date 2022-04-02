import Home from "../src/pages/Home.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
   </Router>
  );
}

export default App;
