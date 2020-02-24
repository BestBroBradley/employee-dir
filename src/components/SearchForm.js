import React from "react"


export const SearchForm = () => {
    return (
        <div className="container">
            <div className="row">
            <div className="col-6">
            <form>
                <div className="form-group">
                    <h2>Search by Name</h2>
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">Search for a valid name.</small>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>

            <div className="col-6">
            <form>
                <div className="form-group">
                    <h2>Search by Department</h2>
                    <label htmlFor="exampleInputEmail1">Department</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">Search for a valid department.</small>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
            </div>
        </div>

    )
}