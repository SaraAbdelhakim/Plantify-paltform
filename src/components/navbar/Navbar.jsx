import React, { useEffect, useState } from 'react'
import "./Navbar.scss"

const Navbar = () => {

    const [active, setActive] = useState(false)

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
        window.addEventListener("scroll", isActive)

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    },[])
  return (
    <div className={active ? 'navbar active' : 'navbar'}>
        <div className='container'>
            <div className='logo'>
                <span className='text'>plant-ify</span>
            </div>
            <div className='links'>
                <span>Become a PlantKeeper</span>
                <span>Login</span>
                <button>Join</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar