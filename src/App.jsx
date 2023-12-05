import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import {Routes, Route} from 'react-router-dom'
import SpeechToText from "./components/SpeechToText";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/speechtotext" Component={SpeechToText} />
      </Routes>
    </div>
  );
}

export default App;
