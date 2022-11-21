import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorElement from "../Pages/Shared/ErrorElement/ErrorElement";
import AdminRoute from "../PrivetRoute/AdminRoute";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageDoctor",
        element: (
          <AdminRoute>
            <ManageDoctor></ManageDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
        element: (
          <AdminRoute>
            <Payment></Payment>
          </AdminRoute>
        ),
      },
    ],
  },
]);
