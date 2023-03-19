import Layout from "antd/es/layout/layout";
import { useEffect } from "react";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import "./App.css";
import {
  Navbar,
  NavbarItemProps,
  NavbarProps
} from "./Components/Navbar/Navbar";
import { PathContext } from "./Context/PathContext";
import { Blog } from "./Pages/Blog/Blog";
import { Home } from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  const navbarItems: NavbarItemProps[] = [
    { key: "home", label: <NavLink to="/">Home</NavLink> },
    { key: "blog", label: <NavLink to="/blog">Blog</NavLink> },
  ];

  const navbarProps: NavbarProps = {
    items: navbarItems,
    selectedKeys: [],
  };

  useEffect(() => {
    console.log("path changed");
  }, [window.location.pathname]);

  return (
    <PathContext.Provider value={{ path: "/" }}>
      <Layout>
        <Navbar {...navbarProps} />
        <RouterProvider router={router}></RouterProvider>
      </Layout>
    </PathContext.Provider>
  );
}

export default App;
