import React from 'react'
import './Teams.css'
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