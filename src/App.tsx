import {
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { App as StyledApp } from "./component/App";
import "./index.css";
import { ProductList } from "./page/Product/List";
import { Login } from "./page/Login";
import { SignUp } from "./page/SingUp";
import { ProductEdit } from "./page/Product/Edit";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/singup",
      element: <SignUp />,
    },

    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/product/edit/:id",
      element: <ProductEdit />,
    },
  ]);
  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
}

export default App;
