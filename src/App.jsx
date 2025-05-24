import React from "react"
import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import MyPlants from "./pages/myPlants/MyPlants"
import PlantDetails from "./pages/plantDetails/PlantDetails"
import MyRequests from "./pages/myRequests/MyRequests"
import AddPlant from "./pages/addPlant/AddPlant"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import MyBookings from "./pages/myBookings/MyBookings"
import BookingRequests from "./pages/bookingRequests/BookingRequests"
import MyProfile from "./pages/myProfile/MyProfile"
import Plants from "./pages/plants/Plants"
import PlantSitterListing from './pages/plantSitterListing/PlantSitterListing';


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout = ()=>{
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/myPlants",
          element: <MyPlants/>
        },
        {
          path: "/plantDetails/:id",
          element: <PlantDetails/>
        },
        {
          path: "/myRequests",
          element: <MyRequests/>
        },
        {
          path: "/addPlant",
          element: <AddPlant/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
        {
          path: "/myBookings",
          element: <MyBookings/>
        },
        {
          path: "/bookingRequests",
          element: <BookingRequests/>
        },
        {
          path: "/myProfile",
          element: <MyProfile/>
        },
        {
          path: "/plants",
          element: <Plants/>
        },
                {
          path: "/plantSitterListing",
          element: <PlantSitterListing/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
   </div>
  )
}

export default App
