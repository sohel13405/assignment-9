import { createBrowserRouter } from "react-router";
import Home from "../layouts/homeLayouts/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Root from "../components/root/Root";
import About from "../pages/about/About";
import MyProfile from "../pages/myprofile/MyProfile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index:true,
          loader: ()=> fetch ('event.json'),
          
          element: <Home></Home>
          
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/myprofile',
          element: <MyProfile></MyProfile>
        }
      ]
      
    },
    
   
  ]);

  export default router;