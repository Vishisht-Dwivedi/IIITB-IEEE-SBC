import React from 'react'
import './Teams.css'
import m1 from '../../assets/m1.jpg'
import m2 from '../../assets/m2.jpg'
import m3 from '../../assets/m3.jpg'

const Teams = () => {
  return (
    <div className='Teams'>
      <div className='team'>
        <h1>Meet the team</h1>
      </div>
      <div className='faculty'>
        <h2>Faculty Members</h2>
      </div>
      <div className='imgs'>
        <div className='img m1'>
          <img src='m1' alt=''/>
        </div>
        <div className='img m2'>
        <img src='m1' alt=''/>
        </div>
        <div className='img m3'>
        <img src='m1' alt=''/>
        </div>
      </div>
    </div>
    
  )
}

export default Teams