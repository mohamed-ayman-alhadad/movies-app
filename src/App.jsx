import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import MovieDetailes from "./views/MovieDetailes";
import Search from "./views/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "details/:id", element: <MovieDetailes /> },
      { path: "search", element: <Search /> },
      { path: "*", element: <h2 className="container text-white">Page not found</h2> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}