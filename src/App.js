import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import IslamRelign from "./pages/IslamRelignPage/IslamRelign";
import { Route, Routes } from "react-router-dom";
import Statics from "./pages/HomePage/Statistics/Statistics";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/islam" element={<IslamRelign />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
