import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/**import semua componen */
import Username from "./componen/Username";
import Register from "./componen/Register";
import Password from "./componen/Password";
import Recovery from "./componen/Recovery";
import Profile from "./componen/Profile";
import Reset from "./componen/Reset";
import PageNotFound from "./componen/PageNotFound";

/**router rout */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
