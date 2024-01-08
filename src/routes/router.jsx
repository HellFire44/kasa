import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Header from "../components/Header/Header";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";
import Logement from "../pages/Logement/Logement";
import About from "../pages/About/About";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";


const HeaderFooterLayout = () => {
      return <>
            <Header />
            <Main>
                  <Outlet />
            </Main>
            <Footer />
      </>
};

export const router = createBrowserRouter([
      {
            element: <HeaderFooterLayout />,
            errorElement: <ErrorPage />,
            children: [
                 {
                       path: "/",
                       element: <HomePage />
                 },
                 {
                   path: "/logement/:id",
                   element: <Logement />
                 },
                 {
                   path: "/about",
                   element: <About />
                 }
            ]
      },
])