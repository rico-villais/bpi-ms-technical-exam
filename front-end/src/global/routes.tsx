import {
  createBrowserRouter,
} from "react-router-dom";

// import router
import UserRouter from '../pages/user/UserRouter';

// components
import Forbidden from "./Forbidden";
import Login from "../pages/user/Login";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Forbidden/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  ...UserRouter
]);

export default router;