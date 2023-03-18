import "./App.css";
import { Route, Routes } from "react-router-dom";
import tvImage from "./assets/images/models/tv_bg.png";

import HomePage from "./pages/HomePage/HomePage";
import StagePage from "./pages/StagePage/StagePage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <img src={tvImage} className="tvImg" />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/play" element={<StagePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
