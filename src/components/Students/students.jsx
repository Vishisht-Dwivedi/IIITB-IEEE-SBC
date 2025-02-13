import React, { useEffect, useRef } from 'react';
import './students.css';
import m2 from '../../assets/m2.jpg';
//Added keys so that react stops giving red lines
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

const Roles = () => {
  // Got the intersection observer code from MDN...dont know exactly how it works
  const imgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.8 });
    imgRefs.current.forEach((img) => {
      observer.observe(img);
    });
    return () => observer.disconnect();
  }, []);
  //My code starts here
  return teamArray.map((student, index) => (
    <div className="students" key={student.key}>
      <img
        src={m2}
        className="animations"
        alt=""
        ref={(el) => (imgRefs.current[index] = el)}
      />
      <div className="studentInside">
        <h5>{student.name}</h5>
        <h5>{student.role}</h5>
      </div>
    </div>
  ));
};

const Students = () => {
  return (
    <>
      <div className='faculty'>
        <h2>Student Committee</h2>
      </div>
      <div className="student">
        <Roles />
      </div>
    </>
  );
};

export default Students;
