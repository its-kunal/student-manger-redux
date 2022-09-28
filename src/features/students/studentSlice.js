import { createSlice } from "@reduxjs/toolkit";

// Initial Data
const initialState = [
    {
        id: 'ABCD123',
        name: 'John Doe',
        age: 16,
        standard: 11,
        section: 'A',
        // joinedAt: new Date('2014-09-24'),
        gender: 'Male',
        grades: 'A+'
    },
    {
        id: 'PQRS6789',
        name: 'Risika Renozu',
        age: 17,
        standard: 12,
        section: 'C',
        // joinedAt: new Date('2012-06-12'),
        gender: 'Female',
        grades: 'B'
    },
    {
        id: 'WXYZ7890',
        name: 'Naruto',
        age: 12,
        standard: 7,
        section: 'D',
        // joinedAt: new Date('2011-03-11'),
        gender: 'Female',
        grades: 'B'
    }
]

export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        createStudent: (state, action) => {
            state = [...state, action.payload]
            return state
        },
        deleteStudent: (state, action) => {
            return state.filter((v) => {
                return action.payload != v.id
            })
        },
        updateStudent: (state, action) => {
            let a = action.payload
            let av = state.map((v) => {
                if (v.id == a.id) {
                    v = a
                }
                return v
            })
            return av
        }
    }
})
export const selectStudent = (state) => state.student
export default studentSlice.reducer
export const { createStudent, deleteStudent, updateStudent } = studentSlice.actions