import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import People from './components/People.jsx';
import SingleUser from './components/SingleUser.jsx';
import UsingAxios from './components/UsingAxios.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<People></People>,
  },
  {
    path: "/people",
    element: <h1>This is another page</h1>,
  },

  {
    path: "/people/:id",
    element: <SingleUser></SingleUser>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
     <App />
    </BrowserRouter> */}
     {/* <RouterProvider router={router} /> */}
     <UsingAxios></UsingAxios>
  </React.StrictMode>,
)
