import { createBrowserRouter } from "react-router";
import Home from "../layouts/homeLayouts/Home";
import ErrorPage from "../pages/error/ErrorPage";
import Root from "../components/root/Root";
import About from "../pages/about/About";
import MyProfile from "../pages/myprofile/MyProfile";
import EventDetails from "../pages/eventDetails/EventDetails";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/loading/Loading";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          index:true,
          loader: ()=> fetch ('/event.json'),
          hydrateFallbackElement:<Loading></Loading>,
          element: <Home></Home>
          
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/myprofile',
          element: <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        },
        {
          path:'/eventDetails/:id',
          element: <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>,
          loader: ()=> fetch('/event.json'),
          hydrateFallbackElement:<Loading></Loading>
        },
      ]
      
    },
    {
      path: '/auth',
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path:'/auth/login',
          element: <Login></Login>
        },
        {
          path: '/auth/register',
          element: <Register></Register>
        },
      
      ]
    }, 
      
       
    
    
   
  ]);

  export default router;