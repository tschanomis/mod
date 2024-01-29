import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./screens/Layout";

import AppointementList from "./components/AppointementList.component";
import StaffMemberList from "./components/StaffMemberList.component";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <AppointementList />,
      },
      {
        path: "staff-members",
        element: <StaffMemberList />,
      },
      {
        path: "clients",
        element: <>clients</>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
