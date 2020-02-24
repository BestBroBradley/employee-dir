import React from "react"

export const SearchForm = () => {
    return (
        <div className="container">
            <div className="row" style={{justifyContent: "center"}}>
            <div className="col-6">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Search by Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="name" className="form-text text-muted">Search for a valid name.</small>
                    <div className="row" style={{justifyContent: "center"}}><p>-OR-</p></div>
                    <label htmlFor="exampleInputEmail1">Search by Department</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="department" className="form-text text-muted">Search for a valid name.</small>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
            </div>
        </div>
    )
}