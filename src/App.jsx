import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Form1 from "./web-tinh/Form1";
// import Home from "./web-tinh/Home";
import Index from "./web-tinh/Index";
import Blog from "./web-tinh/Blog";
import Home from "./web-tinh/Home";
import Root from "./web-tinh/Root";
import Main from "./web-tinh/Main";
import Products from "./web-tinh/Products";
import Header from "./web-tinh/header"
import Showroom from "./web-tinh/Showrooms";
import Sanpham from "./web-tinh/Sanpham";
import Carts from "./Carts"
const router = createBrowserRouter(
  [{
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
      { path: "/showrooms", element: <Showroom /> },
      { path: "/home", element: <Home /> },
      { path: "/header", element: <Header /> },
      { index: true, element: <Index /> },
      { path: "/products", element: <Products /> },
      { index: true, element: <Main /> },
      { path: "/sanpham", element: <Sanpham /> },
      { path: "/buy", element: <Carts /> },
    ]
  }

  ]
)
function App() {
  return <RouterProvider router={router}></RouterProvider>
}
export default App