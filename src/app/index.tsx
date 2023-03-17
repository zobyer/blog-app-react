import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "styles/App.scss";
import HomePage from "app/pages/HomePage";
import PostDetails from "./pages/PostDetails";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post-details/:postId" element={<PostDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
