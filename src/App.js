import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route} from "react-router-dom";
import Competition from "./Pages/Competition";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-px">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/competition/:id"
          handler={Competition}
          element={<Competition />}
        />
      </Routes>
        <Footer />
    </div>
  );
}

export default App;
