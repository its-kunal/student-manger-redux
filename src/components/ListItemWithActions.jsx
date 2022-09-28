import { useDispatch, useSelector } from "react-redux"
import { selectStudent, createStudent, deleteStudent, updateStudent } from "../features/students/studentSlice"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function ListItemWithActions() {
    const dispatch = useDispatch()
    const students = useSelector(selectStudent)
    const formRef = useRef()
    const navigate = useNavigate()
    return (
        students.map((s) => {
            return (<li className='list-group-item d-flex flex-column flex-md-row justify-content-between' key={s.id}>
                <div>
                    <div className='fw-bold fs-5'>{s.name}</div>
                    <p className='mb-0'>Gender - {s.gender}, Age - {s.age}, Std - {s.standard} '{s.section}'</p>
                </div>
                <div className='align-self-center d-flex my-3 my-md-0 btn-group'>
                    <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#${s.id}`}><i className="bi bi-window-dock"></i></button>
                    <button className='btn btn-success' data-bs-toggle="modal" data-bs-target={`#${s.id}update`}
                        onClick={(e) => {
                            navigate(`/update/${s.id}`)
                        }}
                    ><i className="bi bi-arrow-clockwise"></i></button>
                    <button className='btn btn-danger' onClick={(e) => {
                        console.log(s.id)
                        dispatch(deleteStudent(s.id))
                    }}><i className="bi bi-trash"></i></button>
                </div>
                {DataShowModal(s)}
            </li>)
        })
    )
}

function DataShowModal(s) {
    return <div className="modal fade" id={s.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Student Details, {s.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {
                        Object.keys(s).map((v) => {
                            return <div className="d-flex row">
                                <div className="fw-light fs-5 mx-5 justify-self-start col">{v.toUpperCase()}</div>
                                <div className="fw-bold fs-5 mx-5 col">{s[v]}</div>
                            </div>
                        })
                    }
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
}

