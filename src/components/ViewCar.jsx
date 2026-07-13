import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const API_URL = "https://host-demo-app.onrender.com/api/cars"

const ViewCar = () => {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCars = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setCars(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <div>
        <NavigationBar/>

      <div className="container mt-4">

        <div className="card shadow">

          <div className="card-header bg-primary text-white text-center">
            <h3>View Cars</h3>
          </div>

          <div className="card-body">

            {loading ? (
              <h4 className="text-center">Loading...</h4>
            ) : (
              <div className="table-responsive">

                <table className="table table-bordered table-striped table-hover">

                  <thead className="table-dark">
                    <tr>
                      <th>Reg No</th>
                      <th>Brand</th>
                      <th>Model</th>
                      <th>Type</th>
                      <th>Fuel</th>
                      <th>Transmission</th>
                      <th>Seats</th>
                      <th>Rent/Day</th>
                      <th>City</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cars.map((car) => (
                      <tr key={car.id}>
                        <td>{car.registration_number}</td>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.vehicle_type}</td>
                        <td>{car.fuel_type}</td>
                        <td>{car.transmission}</td>
                        <td>{car.seating_capacity}</td>
                        <td>₹ {car.rent_per_day}</td>
                        <td>{car.city}</td>
                        <td>{car.availability_status}</td>
                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  )
}

export default ViewCar