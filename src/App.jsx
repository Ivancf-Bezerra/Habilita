import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingInstructor from "./components/FloatingInstructor";

// Instrutor
import Instrutor from "./pages/Instrutor/Index";
import HeaderInstrutor from "./pages/Instrutor/Header";

function App() {
  return (
    <BrowserRouter basename="/DASETAAI">
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="h-14-5" />
              <Hero />
              <Features />
              <About />
              <CTA />
              <Contact />
              <FloatingInstructor />
              <Footer />
            </>
          }
        />

        {/* INSTRUTOR */}
        <Route
          path="/instrutor"
          element={
            <>
              <HeaderInstrutor />
              <div className="h-14.5" />
              <Instrutor />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
