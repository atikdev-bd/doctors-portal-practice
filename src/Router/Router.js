import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([

    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/appointment',
                element : <Appointment></Appointment>
            },
            
           
        ]
    },

    {
        path : '/dashboard',
        element : <PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
        children : [
            {
            path : '/dashboard',
            element : <Dashboard></Dashboard>
            },
            {
            path : '/dashboard/allUsers',
            element : <AllUser></AllUser>
            }
        ]
    }

])