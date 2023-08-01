import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Header from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import './App.scss';

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (<Home />),
      },
      {
        path: "/products/:id",
        element: (<Products />),
      },
      {
        path: "/product/:id",
        element: (<Product />),
      },
    ]
  }

]);


const App = () => {
  return (
    <div> <RouterProvider router={router} /> </div>
  )
}

export default App