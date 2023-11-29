import React from 'react'
import Header from './Header'

function Dashboard() {
  return (
    <>
    <Header insideDashboard/>
    <div className='dash-page d-flex justify-content-center'>
        <div className='d-flex justify-content-between container mt-5 p-5' style={{backgroundColor:'#ffc107'}}>
            <div>
                <h3 style={{textTransform:'uppercase'}}>Username</h3>
                <p>email</p>
            </div>
            <div>
                <button className='btn btn-primary'>EDIT PROFILE</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default Dashboard