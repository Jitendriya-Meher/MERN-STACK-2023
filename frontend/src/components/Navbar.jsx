import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../store/auth'

const Navbar = () => {

    const {isLoggedIn} = useAuth();

  return (
    <>

    <header>
        <div className="container">

            <div className="logo-brand">
                Jiksss...
            </div>

            <nav>
                <ul>

                    <li>
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/service"}>
                            Services
                        </NavLink>
                    </li>
                    {
                        isLoggedIn ? <>
                        <li>
                            <NavLink to={"/logout"}>
                                LogOut
                            </NavLink>
                        </li>
                        </> :
                        <>
                        <li>
                            <NavLink to={"/login"}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/register"}>
                                SignUp
                            </NavLink>
                        </li>
                        </>
                    }

                </ul>
            </nav>

        </div>
    </header>
      
    </>
  )
}

export default Navbar
