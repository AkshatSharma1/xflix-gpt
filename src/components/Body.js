import React from "react";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Error from "./Error";


const Body = () => {

  
  //Creating Routes
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/error",
      element: <Error />
    }
  ]);

  //Auth state change event listener: will be called only once, so useEffect with []
  // Shifted it to a component which is present everytime. here Header

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
