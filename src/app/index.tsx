import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "app/pages/HomePage";
import "styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
