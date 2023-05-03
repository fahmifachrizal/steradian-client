import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../layouts/sections/Home";
import Orders from "../layouts/sections/Orders";
import Cars from "../layouts/sections/Cars";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import Edit from "../layouts/sections/Edit";

// Route definition
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    loader: ()=>{
      const guarder = localStorage.getItem('access_token')
      if (!guarder){
        return redirect('/login')
      }
      return null
    },
    children:[
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/edit',
        element: <Edit />
      },
      {
        path:'/orders',
        element: <Orders />
      },
      {
        path:'/cars',
        element: <Cars />
      },
    ]
  },
  {
    path:'/login',
    element: <Login />,
    loader: ()=>{
      const guarder = localStorage.getItem('access_token')
      if (guarder){
        return redirect('/')
      }
      return null
    },
  }, 
  {
    path:'/register',
    element: <Register />,
    loader: ()=>{
      const guarder = localStorage.getItem('access_token')
      if (guarder){
        return redirect('/')
      }
      return null
    },
  }, 
])


export default router