import React from 'react'
import './Teams.css'
import m1 from '../../assets/m1.jpg'
import m2 from '../../assets/m2.jpg'
import m3 from '../../assets/m3.jpg'
import Students from './students.jsx';
import Faculty from './faculty.jsx';
const Teams = () => {
  return (
    <section className='Teams' id="Teams">
      <div className='Heading'>
        <h2>Meet the team</h2>
      </div>
      <Faculty />
      <Students />
    </section>

  )
}

export default Teams