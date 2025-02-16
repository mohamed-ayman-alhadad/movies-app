import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useEffect, useState } from "react";
import MovieController from "./Controls/MovieController";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import MovieDetailes from './views/MovieDetailes';
function App() {

 

  

  let routes = createBrowserRouter([
    {path:"", element:<Layout/>, children:[
      {index:true, element:<Home/>},
      {path:"details/:id", element:<MovieDetailes/>}
    ]}
  ])

  return <RouterProvider router={routes}></RouterProvider>
}


export default App;
