import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./compnents/navbar/Navbar";
import Footer from "./compnents/footer/Footer";
import Menu from "./compnents/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss"
import Single_user from "./pages/user/Single_user";
import Single_product from "./pages/product/Single_product";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {

  const Layout = ()=>{
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>          
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
          </div>
        </div>
        <Footer/>

      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,

        },
        {
          path:"/users",
          element:<Users/>,

        },
        {
          path:"/products",
          element:<Products/>,

        },
        {
          path:"/users/:id",
          element:<Single_user />,

        },
        {
          path:"/products:id",
          element:<Single_product />,

        },
      ]
    },
    {
      path:"/login",
      element:<Login />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
