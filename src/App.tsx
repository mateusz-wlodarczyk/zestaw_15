import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Error from "./pages/Error";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.home.link} element={<HomePage />} />
          <Route path={ROUTES.search.link} element={<Search />} />
          <Route path={ROUTES.settings.link} element={<Settings />} />
          <Route path={ROUTES.error.link} element={<Error />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
