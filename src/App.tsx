import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TripHome } from "./pages";
import { TripDetail } from "./pages/trip-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TripHome/>,
  },
  {
    path:"/tripDetail/:tripId",
    element: <TripDetail/>
  }
]);

export function App (){
  return(
    <RouterProvider router={router} />
  )
}