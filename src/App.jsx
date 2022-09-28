import React, { useRef } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { NavLink, Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { selectStudent, deleteStudent, updateStudent } from './features/students/studentSlice'
import { ErrorBoundary } from './components/ErrorBoundary'

export default function App() {
  const students = useSelector(state => state.student)
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h1">
            <NavLink to="/" className={"nav-link"}>Student ERP</NavLink>
          </span>
        </div>
      </nav>

      <div className="container d-flex mt-5">
        <nav className="nav nav-pills flex-column d-none d-md-flex" style={{
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
                <div className='h5 text-muted`'>Welcome to Student ERP. Click on students tab to find more.</div>
                <ul className="list-group mt-3">
                  <ListItemWithActions students={students} />
                </ul>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </>
  )
}

function ListItem() {
  const students = useSelector(selectStudent)
  return (
    students.map((s) => {
      return <li className='list-group-item' key={s.id}>
        <div className='fw-bold fs-5'>{s.name}</div>
        <p className='mb-0'>Gender - {s.gender}, Age - {s.age}, Std - {s.standard} '{s.section}'</p>
      </li>
    })
  )
}

function ListItemWithActions({ students }) {
  return (
    students.map((s) => {
      const dispatch = useDispatch()
      const formRef = useRef()
      return (<li className='list-group-item d-flex flex-row justify-content-between' key={s.id}>
        <div>
          <div className='fw-bold fs-5'>{s.name}</div>
          <p className='mb-0'>Gender - {s.gender}, Age - {s.age}, Std - {s.standard} '{s.section}'</p>
        </div>
        <div className='align-self-center d-none d-md-flex btn-group'>
          <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#${s.id}`}><i className="bi bi-window-dock"></i></button>
          <button className='btn btn-success' data-bs-toggle="modal" data-bs-target={`#${s.id}update`}><i className="bi bi-arrow-clockwise"></i></button>
          <button className='btn btn-danger' onClick={(e) => {
            dispatch(deleteStudent(s.id))
          }}><i className="bi bi-trash"></i></button>
        </div>

        <div className="modal fade" id={s.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Student Details, {s.name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id={`${s.id}update`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Update Student Details, {s.name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form className='container' onSubmit={(e) => {
                  e.preventDefault()
                  let av = formRef.current
                  let v = {
                    name: av.name.value,
                    gender: av.gender.value,
                    id: av.id.value,
                    age: av.age.value,
                    standard: av.standard.value,
                    section: av.section.value,
                    joinedAt: s.joinedAt,
                    grades: av.grades.value
                  }
                  console.log(v)
                  dispatch(updateStudent(v))
                }} ref={formRef}  >
                  <div className="mb-3">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" className='form-control' id='name' defaultValue={s.name} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="gender" className='form-label'>Gender</label>
                    <input type="text" className='form-control' id='gender' defaultValue={s.gender} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="age" className='form-label'>Age</label>
                    <input type="number" className='form-control' id='age' defaultValue={s.age} />
                  </div>
                  <div className="mb-3 row">
                    <div className="col">
                      <label htmlFor="standard" className='form-label'>Standard</label>
                      <input type="number" className='form-control' id='standard' defaultValue={s.standard} />
                    </div>
                    <div className="col">
                      <label htmlFor="section" className='form-label'>Section</label>
                      <input type="text" className='form-control' id='section' defaultValue={s.section} />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="grades" className='form-label'>Grades</label>
                    <input type="text" className='form-control' id='grades' defaultValue={s.grades} />
                  </div>
                  <div className="my-4 d-flex justify-content-end">
                    <button className="btn btn-primary" type='submit'>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>

      </li>)
    }))
}
