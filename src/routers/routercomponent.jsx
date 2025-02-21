import React from "react";
import { Navigate } from "react-router-dom";
import AuthRoute from "./AuthRoute";

const Layout = React.lazy(() => import("../pages/layout"));
const Login = React.lazy(() => import("../pages/login"));
const Dashboard = React.lazy(() => import("../pages/dashboard"));

const Admin = React.lazy(() => import("../pages/admin"));
const Pages404 = React.lazy(() => import("../pages/404page"));
const Unable = React.lazy(() => import("../pages/404page/Unable"));
const Media = React.lazy(() => import("../pages/media"));
const Files = React.lazy(() => import("../pages/files"));
const Gateway = React.lazy(() => import("../pages/Gateway"));

const routes = [
  { path: "/", element: <Navigate to="/main" />, auth: false, name: "/" },
  {
    path: "/main",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    auth: false,
    name: "main",
    icon: "PieChartOutlined",
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" />,
        auth: false,
        name: "default",
        icon: "PieChartOutlined",
        children: [],
      },
      {
        path: "files",
        element: <Files />,
        auth: false,
        name: "Files",
        icon: "PieChartOutlined",
        children: [],
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        auth: false,
        name: "dashboard",
        icon: "PieChartOutlined",
        children: [],
      },

      {
        path: "admin",
        element: <Admin />,
        auth: false,
        name: "admin",
        icon: "PieChartOutlined",
        children: [],
      },
      {
        path: "media",
        element: <Media />,
        auth: false,
        name: "dashboard",
        icon: "PieChartOutlined",
        children: [],
      },
      {
        path: "Gateway",
        element: <Gateway />,
        auth: false,
        name: "Gateway",
        icon: "PieChartOutlined",
        children: [],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    auth: false,
    name: "login",
    icon: "DesktopOutlined",
  },
  {
    path: "/Unable",
    element: <Unable />,
    auth: false,
    name: "Unable",
  },
  { path: "*", element: <Pages404 />, auth: false, name: "404" },
];

export default routes;
