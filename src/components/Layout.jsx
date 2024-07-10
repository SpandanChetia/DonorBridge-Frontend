import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    const location = useLocation();
    const isSignInPage = location.pathname === "/signin";

    return (
        <>
            {!isSignInPage && <Navbar />}
            <Outlet />
        </>
    );
};

export default Layout;
