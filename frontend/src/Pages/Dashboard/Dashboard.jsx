import React, { useState } from 'react';
import AddHotel from './AddHotel';
import AddFlight from './AddFlight';

const Dashboard = () => {
  const [isOnHotelScreen, setIsOnHotelScreen] = useState(true);
  const activeStyle = {
    backgroundColor: 'rgba(213, 52, 101, 0.75)',
  }

  return (
    <div className='app__dashboardContainer app__flex'>
        <div className="app__dashboardContainer-dashboard">
          <div className='app__dashboardContainer__dashboard-nav'>
            <div className='app__flex' style={isOnHotelScreen ? activeStyle : {}} onClick={() => setIsOnHotelScreen(true)}><h1>Add Hotel</h1></div>
            <div className='app__flex' style={!isOnHotelScreen ? activeStyle : {}} onClick={() => setIsOnHotelScreen(false)}><h1>Add Flight</h1></div>
          </div>
          <div className='app__dashboardContainer__dashboard-bodyContainer app__flex'>
          {isOnHotelScreen ? <AddHotel/> : <AddFlight/>}
          </div>
        </div>
    </div>
  )
}

export default Dashboard;