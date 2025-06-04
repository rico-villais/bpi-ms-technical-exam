import {
  createBrowserRouter,
} from "react-router-dom";

// import router
import Forbidden from "./Forbidden";
import ProfileRouter from '../pages/profile/ProfileRouter';

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Forbidden/>,
  },
  ...ProfileRouter
]);

export default router;