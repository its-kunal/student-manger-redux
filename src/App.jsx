import React, { useEffect, useRef } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { NavLink, Routes, Route } from 'react-router-dom'
import ListItem from './components/ListItem'
import ListItemWithActions from './components/ListItemWithActions'
import CreateStudent from './components/CreateStudent'
import UpdateComponent from './components/UpdateComponent'

export default function App() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            <NavLink to="/" className={"nav-link"}>Student ERP</NavLink>
          </span>
        </div>
      </nav>

      <div className="container d-flex mt-5 flex-column flex-md-row">
        <nav className="nav nav-pills flex-column d-md-flex" style={{
          minWidth: "150px"
        }}>
          <li className="nav-item">
            <NavLink to="/students" className={"nav-link"}>
              Students
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create" className={"nav-link"}>
              New Student
            </NavLink>
          </li>
        </nav>
        <div className="container ms-md-3 mt-4 mt-md-2">
          <Routes>
            <Route exact path="/" element={
              <div className='container'>
                <div className='h5 text-muted`'>Welcome to Student ERP. Click on students tab to find more.</div>
                <ul className="list-group mt-3">
                  <ListItem />
                </ul>
              </div>
            } />
            <Route path="/students" element={
              <div className='container'>
                <div className='h5 text-muted`'>Welcome to Student ERP.</div>
                <ul className="list-group mt-3">
                  <ListItemWithActions />
                </ul>
              </div>
            } />
            <Route path='/create' element={
              <div className='container'>
                <CreateStudent />
              </div>
            } />
            <Route path='/update/:id' element={
              <div className='container'>
                <UpdateComponent />
              </div>
            } />
          </Routes>
        </div>
      </div>
    </>
  )
}

