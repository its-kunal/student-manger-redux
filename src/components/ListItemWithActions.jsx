import { useDispatch, useSelector } from "react-redux"
import { selectStudent, createStudent, deleteStudent, updateStudent } from "../features/students/studentSlice"
import { useRef } from "react"

export default function ListItemWithActions() {
    const dispatch = useDispatch()
    const students = useSelector(selectStudent)
    const formRef = useRef()
    return (
        students.map((s) => {
            return (<li className='list-group-item d-flex flex-row justify-content-between' key={s.id}>
                <div>
                    <div className='fw-bold fs-5'>{s.name}</div>
                    <p className='mb-0'>Gender - {s.gender}, Age - {s.age}, Std - {s.standard} '{s.section}'</p>
                </div>
                <div className='align-self-center d-none d-md-flex btn-group'>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#${s.id}`}><i className="bi bi-window-dock"></i></button>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target={`#${s.id}update`}><i className="bi bi-arrow-clockwise"></i></button>
                    <button className='btn btn-danger' onClick={(e) => {
                        console.log(s.id)
                        dispatch(deleteStudent(s.id))
                    }}><i className="bi bi-trash"></i></button>
                </div>

                {DataShowModal(s)}

                {DataUpdateModal(s, formRef, dispatch)}
            </li>)
        })
    )
}
function DataUpdateModal(s, formRef, dispatch) {
    return <div className="modal fade" id={`${s.id}update`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    } } ref={formRef}>
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
}

function DataShowModal(s) {
    return <div className="modal fade" id={s.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
}

