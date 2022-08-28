import React from "react";
import { Route, Routes } from "react-router-dom";

//Importing all items
import Navbar from "./components/navbar/Navabr";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/ContactUs";
import Admin from "./components/Admin/Admin";
import Home from "./pages/Home";
import Form from "./pages/upload_form";
import Register from "./components/SignIn/Signin";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/Sign" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
