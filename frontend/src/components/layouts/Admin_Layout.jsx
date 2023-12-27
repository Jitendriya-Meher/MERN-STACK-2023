import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Admin_Layout = () => {
  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/admin/users"}>
            users
            </NavLink>
          </li>
          <li>
            <NavLink to={"/admin/contacts"}>
            contats
            </NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>
            services
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"}>
            Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

    
    <Outlet></Outlet>
    </>

  )
}

export default Admin_Layout