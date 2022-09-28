import { useSelector } from "react-redux"
import { selectStudent } from "../features/students/studentSlice"
export default function ListItem() {
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