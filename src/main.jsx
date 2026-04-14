import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root";
import Homepage from "./pages/homepage/Homepage";
import Friends from "./pages/friends/Friends";
import FriendDetails from "./pages/friendDetails/FriendDetails";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
      {
        index:true,
        Component:Homepage
      },
      {
        path:'/friends',
        Component:Friends
      },
      {
        path:'/friends/:id',
        Component:FriendDetails
      }
    ]
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
