import React from 'react'
import NavBar from './NavBar'

const AddBook = () => {
  return (
    <div>
      <NavBar />
      <center><h2>Add Book</h2></center>
        <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Book Code
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                    Title
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                    Author
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                    Publisher
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Category
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                    Edition
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Number of Copies
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Price
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  publication Year
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Shelf Location
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success">Add Book</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AddBook