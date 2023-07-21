import { Route, Routes } from "react-router-dom";

import { routerMenu } from "./routerMenu";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routerMenu.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<h1>404 - Not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
