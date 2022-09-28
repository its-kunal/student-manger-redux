import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectStudent, updateStudent } from '../features/students/studentSlice'
import { useNavigate } from 'react-router-dom'

export default function UpdateComponent() {
    const { id } = useParams()
    const navigate = useNavigate()
    const formRef = useRef()
    const dispatch = useDispatch()
    const students = useSelector(selectStudent)
    const [av, setAv] = useState({})
    useEffect(() => {
        console.log(id)
        setAv(students.filter((v) => {
            return v.id == id
        })[0])
    }, [])

    function onSubmitHandler() {
        let bi = formRef.current
        let v = {
            id: bi.id.value,
            name: bi.name.value,
            age: bi.age.value,
            standard: bi.standard.value,
            section: bi.section.value,
            gender: bi.gender.value,
            grades: bi.grades.value
        }
        dispatch(updateStudent(v))
        navigate('/students')
    }

    return (
        <div>
            <div className="fw-bold fs-5 mb-3">
                Update Student Details, {av.name}
            </div>
            <form className="container" ref={formRef} onSubmit={(e) => {
                e.preventDefault()
                onSubmitHandler()
            }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" id='name' name='name' defaultValue={av.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Enter ID</label>
                    <input type="text" className='form-control' id='id' name='id' defaultValue={av.id} />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className='form-label'>Enter Age</label>
                    <input type="number" className='form-control' id='age' name='age' defaultValue={av.age} />
                </div>
                <div className="mb-3 row">
                    <div className="col">
                        <label htmlFor="standard" className='form-label'>Enter Standard</label>
                        <input type="number" className='form-control' id='standard' name='standard' defaultValue={av.standard} />
                    </div>
                    <div className="col">
                        <label htmlFor="section" className='form-label'>Enter Section</label>
                        <input type="text" className='form-control' id='section' name='section' defaultValue={av.section} />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Enter Gender</label>
                    <input type="text" className="form-control" id="gender" name='gender' defaultValue={av.gender} />
                </div>
                <div className="mb-3">
                    <label htmlFor="grades" className='form-label'>Enter Grades</label>
                    <input type="text" className="form-control" id="grades" name='grades' defaultValue={av.grades} />
                </div>
                <div className="my-5 d-flex justify-content-end " >
                    <button className="btn btn-danger mx-3" onClick={(e) => {
                        navigate(-1)
                    }}>Back</button>
                    <button className="btn btn-success mx-3 me-0" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
