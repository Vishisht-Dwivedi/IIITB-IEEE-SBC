import React, { useEffect, useRef } from 'react';
import './cards.css';
import Roles from './roles.jsx';
const teamArray = [
  {
    role: "Chairperson",
    name: "Pareeshi",
    key: 1
  },
  {
    role: "Secretary",
    name: "Sameer",
    key: 2
  },
  {
    role: "Vice-Chairperson",
    name: "Faeez",
    key: 3
  },
  {
    role: "Vice-Chairperson",
    name: "Sushmita",
    key: 4
  },
  {
    role: "Treasurer",
    name: "Amay",
    key: 5
  },
  {
    role: "Web-Master",
    name: "Priya",
    key: 6
  },
  {
    role: "Web-Master",
    name: "Vishisht",
    key: 7
  },
  {
    role: "Event-Coordinator",
    name: "Mridu",
    key: 8
  },
  {
    role: "Design-Coordinator",
    name: "Shubhojeet",
    key: 9
  },
  {
    role: "Social-Media",
    name: "Pranith",
    key: 10
  }
];
const Students = () => {
  return (
    <>
      <div className='teams-subheading'>
        <h2>Student Committee</h2>
      </div>
      <div className="student">
        <Roles teamArray={teamArray} />
      </div>
    </>
  );
};

export default Students;
