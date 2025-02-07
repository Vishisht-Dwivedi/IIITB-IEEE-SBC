import React from 'react'
import './Page.css'
import logo from '../../assets/logo.png'

const Page = () => {
  return (
    <div className='Pages'>
        <img src={logo} alt=''/>
        <h1>COMPUTER SOCIETY</h1>
        <h2>STUDENT BRANCH</h2>
        <h3>IIIT Bhopal</h3>
    </div>
  )
}

export default Page