import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createStudent } from "../features/students/studentSlice"
import { useNavigate } from 'react-router-dom'

export default function CreateStudent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formRef = useRef()
    function onSubmitHandler() {
        let av = formRef.current
        let v = {
            id: av.id.value,
            name: av.name.value,
            age: av.age.value,
            standard: av.standard.value,
            section: av.section.value,
            gender: av.gender.value,
            grades: av.grades.value
        }
        console.log(v)
        dispatch(createStudent(v))
        navigate('/students')
    }
    return (

        <div>
            <div className='mb-3 fw-bold fs-4'>
                Add a Student
            </div>
            <form className="container" ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                onSubmitHandler()
            }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" id='name' name='name' />
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Enter ID</label>
                    <input type="text" className='form-control' id='id' name='id' />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className='form-label'>Enter Age</label>
                    <input type="number" className='form-control' id='age' name='age' />
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="standard" className='form-label'>Enter Standard</label>
                        <input type="number" className='form-control' id='standard' name='standard' />
                    </div>
                    <div className="col">
                        <label htmlFor="section" className='form-label'>Enter Section</label>
                        <input type="text" className='form-control' id='section' name='section' />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Enter Gender</label>
                    <input type="text" className="form-control" id="gender" name='gender' />
                </div>
                <div className="mb-3">
                    <label htmlFor="grades" className='form-label'>Enter Grades</label>
                    <input type="text" className="form-control" id="grades" name='grades' />
                </div>
                <div className="my-5 d-flex justify-content-end">
                    <button className="btn btn-success" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
