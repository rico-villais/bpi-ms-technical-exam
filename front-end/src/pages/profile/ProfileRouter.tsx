// components
import Home from './view/Home';
import Login from './view/Login';

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]

export default router;