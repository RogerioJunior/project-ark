import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./components/Navbar";
import Home from 'pages/Home';
import Play from 'pages/Play';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
