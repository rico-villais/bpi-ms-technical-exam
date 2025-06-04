import React from 'react';
import './global/globals.scss';
import routes from './global/routes';
import {
  RouterProvider,
} from "react-router-dom";


function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
