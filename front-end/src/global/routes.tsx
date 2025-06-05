import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';


// import router
import UserRouter from '../pages/user/UserRouter';

// components
import Forbidden from "./Forbidden";
import Login from "../pages/user/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path='/*' element={<Forbidden/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        { UserRouter.map((item, i) => <Route key={i} path={item.path} element={item.element} /> )}
      </Route>
  )
)

console.log("router", router)


export default router;