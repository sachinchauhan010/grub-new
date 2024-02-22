import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./components/Search";
import { Contact } from "./images/SvgIcon";
import LogIn from "./components/LogIn";
import Cart from "./components/Cart";
import { Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
const AppLayout = () => {
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
