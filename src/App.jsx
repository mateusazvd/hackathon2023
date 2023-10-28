import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Link,
  useHistory,
  Routes,
} from "react-router-dom";

const HomeScreen = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/details">Ir para os detalhes</Link>
    </div>
  );
};

const DetailsScreen = () => {
  return (
    <div>
      <h1>Detalhes</h1>
      <Link to="/">Voltar</Link>
    </div>
  );
};

const App = () => {
  const history = useHistory();

  return (
    <BrowserRouter basename="/app">
    <Routes>
      <Route path="/" /> {/* 👈 Renders at /app/ */}
    </Routes>
  </BrowserRouter>
  );
};

export default App;
