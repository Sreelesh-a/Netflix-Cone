import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieDetails from "./MovieDetails";
// import ScrollToTop from "../utils/ScrollToTop";
import ErrorPage from "./subComponents/ErrorPage";


// const Layout =({childrem})=>{
//   return(
//     <>
//     <ScrollToTop/>
//     {childrem}
//     </>
//   )
// }




function Body() {
  
  // const userData=useSelector((state)=>state.user)

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path:"*",
      element:<ErrorPage/>
    },
    {
      path: "/browse",
      element: <Browse />,
   
    },
    {
      path:"/movie/:id",
      element:<MovieDetails/>
    }
  ]);



  return (
    <div className="">

      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
