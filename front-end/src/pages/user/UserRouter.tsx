// components
import UserList from "./view/UserList";
import UserAdd from "./view/UserAdd";
import UserUpdate from "./view/UserUpdate";

const router = [
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/user",
    element: <UserList />,
  },
  {
    path: "/user/add",
    element: <UserAdd/>,
  },
  {
    path: "/user/update",
    element: <UserUpdate />,
  },
  
];

export default router;