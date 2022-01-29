import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./components/Navbar";
import Home from 'pages/Home';
import Modes from 'pages/Modes';
import PlayMine from 'pages/PlayMine';
import Hangar from 'pages/Hangar';
import Refinary from 'pages/Refinary';
import Store from 'pages/Store';
import Market from 'pages/Market';
import Upgrade from 'pages/Upgrade';
import Checkin from 'pages/Checkin';
import Exchange from 'pages/Exchange';
import Ranking from 'pages/Ranking';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modes" element={<Modes />} />
      <Route path="/PlayMine" element={<PlayMine />} />
      <Route path="/hangar" element={<Hangar />} />
      <Route path="/refinary" element={<Refinary />} />
      <Route path="/store" element={<Store />} />
      <Route path="/market" element={<Market />} />
      <Route path="/upgrade" element={<Upgrade />} />
      <Route path="/checkin" element={<Checkin />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
