import React from 'react'

export default function CreateStudent() {
    return (
        <div>
        <form className="d-flex">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Enter Name</label>
                <input type="text" className="form-control" id='name'/>
            </div>
            <div className="mb-3">
                <label htmlFor="id" className="form-label">Enter ID</label>
                <input type="text" className='form-control' id='id' />
            </div>
            <div className="mb-3"></div>
        </form>
        </div>
    )
}
