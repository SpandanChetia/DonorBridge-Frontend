import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/forms/SignIn";
import Categories from "./components/categories/Categories";
import HomePage from "./components/Home/HomePage";
import CrisisRelief from './components/pages/CrisisPage.jsx';
import ErrorPage from "./components/ErrorPage";
import CategoryDetails from "./components/categories/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "discover", element: <Categories /> },
      { path: "discover/:categoryId", element: <CategoryDetails /> },
      { path: "crisis-act", element: <CrisisRelief/>},
      { path: "signin", element: <SignIn /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
