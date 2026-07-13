import axios from 'axios'
import React, { useState } from 'react'

const API_URL = "https://host-demo-app.onrender.com/api/add-car";

const AddCar = () => {
  const [input, setInput] = useState({
    registration_number: "",
    brand: "",
    model: "",
    vehicle_type: "",
    fuel_type: "",
    transmission: "",
    seating_capacity: "",
    rent_per_day: "",
    city: "",
    availability_status: "Available",
  })

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const submitData = () => {
    axios
      .post(API_URL, input)
      .then((response) => {
        setError(false);
        setMessage(response.data.message)

        setInput({
          registration_number: "",
          brand: "",
          model: "",
          vehicle_type: "",
          fuel_type: "",
          transmission: "",
          seating_capacity: "",
          rent_per_day: "",
          city: "",
          availability_status: "Available",
        })
      })
      .catch((err) => {
        setError(true)

        if (err.response) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Something went wrong");
        }
      })
  }

  return (
    <div>
      

      <div className="container mt-4">
        <div className="card shadow">

          <div className="card-header bg-primary text-white text-center">
            <h3>Add Car</h3>
          </div>

          <div className="card-body">
            <div className="row g-3">

              <div className="col-md-6">
                <label className="form-label">Registration Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="registration_number"
                  value={input.registration_number}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  value={input.brand}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Model</label>
                <input
                  type="text"
                  className="form-control"
                  name="model"
                  value={input.model}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Vehicle Type</label>
                <select
                  className="form-control"
                  name="vehicle_type"
                  value={input.vehicle_type}
                  onChange={inputHandler}
                >
                  <option value="">Select</option>
                  <option>Hatchback</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>MUV</option>
                  <option>Luxury</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Fuel Type</label>
                <select
                  className="form-control"
                  name="fuel_type"
                  value={input.fuel_type}
                  onChange={inputHandler}
                >
                  <option value="">Select</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                  <option>CNG</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Transmission</label>
                <select
                  className="form-control"
                  name="transmission"
                  value={input.transmission}
                  onChange={inputHandler}
                >
                  <option value="">Select</option>
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Seating Capacity</label>
                <input
                  type="number"
                  className="form-control"
                  name="seating_capacity"
                  value={input.seating_capacity}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Rent Per Day</label>
                <input
                  type="number"
                  className="form-control"
                  name="rent_per_day"
                  value={input.rent_per_day}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  value={input.city}
                  onChange={inputHandler}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Availability Status</label>
                <select
                  className="form-control"
                  name="availability_status"
                  value={input.availability_status}
                  onChange={inputHandler}
                >
                  <option>Available</option>
                  <option>Booked</option>
                  <option>Maintenance</option>
                </select>
              </div>

              <div className="col-12 text-center">
                <button
                  className="btn btn-primary"
                  onClick={submitData}
                >
                  Add Car
                </button>
              </div>

              <div className="col-12 text-center">
                <h5 className={error ? "text-danger" : "text-success"}>
                  {message}
                </h5>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddCar