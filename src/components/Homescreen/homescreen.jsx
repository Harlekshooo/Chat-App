import React from 'react'
import './homescreen.css'
import { useNavigate } from 'react-router-dom'


const Homescreen = () => {

  const navigate = useNavigate()

  const handleLogClick = () => {
    navigate('/login')
  }

  return (
    <div className='homescreenContainer'>
        <h2 className='homescreenHeader'>Welcome to my chat bot</h2>
        <div className="btnContainer">
          <button className='log' onClick={handleLogClick}>Click to log in</button>
        </div>
    </div>
  )
}

export default Homescreen