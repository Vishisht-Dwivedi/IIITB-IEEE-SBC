import React, { useEffect, useState } from 'react';
import './cards.css';
import Roles from './roles.jsx';

const Students = () => {
  const [teamArray, setTeamArray] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('/api/team');
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        const data = await response.json();
        setTeamArray(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

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
