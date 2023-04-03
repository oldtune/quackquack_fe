import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Blog } from "./Pages/Blog/Blog";
import { Home } from "./Pages/Home/Home";
import { MainPage } from "./Pages/MainPage/MainPage";
import { Profile } from "./Pages/Profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
