import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import MainLayout from "./components/routes/MainLayout.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import Provider from "./Provider/Provider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch(
            "https://coffee-master-server-l0w6bzmwv-ab-rahmans-projects.vercel.app/coffees"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-master-server-l0w6bzmwv-ab-rahmans-projects.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },

      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/users",

        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://coffee-master-server-l0w6bzmwv-ab-rahmans-projects.vercel.app/users"
          ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
