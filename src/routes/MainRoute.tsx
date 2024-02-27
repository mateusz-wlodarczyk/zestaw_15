import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Search from "../pages/Search";
import Error from "../pages/Error";
import Settings from "../pages/Settings";
import { ROUTES } from "./utils";

function MainRoute() {
  return (
    <Routes>
      <Route path={ROUTES.home.link} element={<HomePage />} />
      <Route path={ROUTES.search.link} element={<Search />} />
      <Route path={ROUTES.settings.link} element={<Settings />} />
      <Route path={ROUTES.error.link} element={<Error />} />
    </Routes>
  );
}

export default MainRoute;
