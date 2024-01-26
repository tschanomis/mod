import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./screens/Layout";

import ListComponent from "./components/ListComponent";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ListComponent />,
      },
      {
        path: "staff-members",
        element: <>staff-members</>,
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
