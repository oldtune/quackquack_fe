import Layout from "antd/es/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Navbar/Navbar";
import { Home } from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <Layout>
      <Navbar />
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
