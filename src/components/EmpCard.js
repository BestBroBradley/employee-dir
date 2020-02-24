import React from "react"


export const EmpCard = () => {
    return (
        <div className="col-4-lg col-6-small card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Emp Name</h5>
                <h6 className="card-subtitle mb-2 text-muted">Department</h6>
                <br/>
                <p className="card-text">Email</p>
                <p className="card-text">Phone</p>
            </div>
        </div>
    )
}