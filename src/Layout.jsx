import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/Header";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();
  const showHeader = location.pathname !== "/honors";

  return (
    <div className="container">
      <Header />
      <div className="body-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
