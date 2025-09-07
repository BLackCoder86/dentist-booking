import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
