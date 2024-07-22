import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    const location = useLocation();
    const isdisplay = location.pathname === "/signin" || location.pathname === "/signup";

    return (
        <>
            {!isdisplay && <Navbar />}
            <Outlet />
        </>
    );
};

export default Layout;
