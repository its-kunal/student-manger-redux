import { configureStore } from '@reduxjs/toolkit'
import student from "../features/students/studentSlice"
export default configureStore({
    reducer: {
        student
    }
}) 