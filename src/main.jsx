import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./layout/Root";
import Homepage from "./pages/homepage/Homepage";
import Friends from "./pages/friends/Friends";
import FriendDetails from "./pages/friendDetails/FriendDetails";
import SelectFriends from "./pages/selectFriends/SelectFriends";
import SelectFriendsProvider from "./context/selectFriendsProvider";
import Stats from "./pages/stats/Stats";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/notFound/NotFound";
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
      },
      {
        path:'/selectedFriends',
        Component:SelectFriends,
      },
      {
        path:'/stats',
        Component:Stats
      }
    ],
    errorElement:<NotFound></NotFound>
  },

]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SelectFriendsProvider>

      <RouterProvider router={router} />,
      <ToastContainer position="top-center" />
    </SelectFriendsProvider>
    
  </StrictMode>,
);
