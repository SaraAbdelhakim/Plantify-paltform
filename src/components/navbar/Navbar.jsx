import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.scss"

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    },[])

    const currentUser = {
        id:1,
        username: "Sara Hammad",
        isKeeper: true,
        isOwner: false
    }
  return (
    <div className={active ? 'navbar active' : 'navbar'}>
        <div className='container'>
            <div className='logo'>
                <Link to="/" className='link'>
                    <span className='text'>plant-ify</span>
                </Link>
            </div>
            <div className='links'>
                <Link className="link" to="/plants">All Plants</Link>
                {!currentUser?.isKeeper && <span>Become a PlantKeeper</span>}
                {!currentUser && <span>Login</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                    <div className='user' onClick={()=>setOpen(!open)}>
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isKeeper && (
                                <>
                                    <Link className="link" to="/myBookings">My Bookings</Link>
                                    <Link className="link" to="/bookingRequests">Booking Requests</Link>
                                </>
                            )}
                            {currentUser?.isOwner && (
                                <>
                                    <Link className="link" to="/myPlants">My Plants</Link>
                                    <Link className="link" to="/addPlant">Add a Plant</Link>
                                    <Link className="link" to="/myRequests">My Requests</Link>
                                </>
                            )}
                            <Link className="link" to="/messages">Messages</Link>
                            <Link className="link" to="/myProfile">My Profile</Link>
                            <Link className="link" to="/">Logout</Link>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar