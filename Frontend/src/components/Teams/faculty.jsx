import React, { useEffect, useState } from 'react';
import './cards.css';
import Roles from './roles.jsx';


const Faculty = () => {
    const [facultyArray, setFacultyArray] = useState([]);

    useEffect(() => {
        const fetchFacultyData = async () => {
            try {
                const response = await fetch('/api/faculty');
                if (!response.ok) {
                    throw new Error('Failed to fetch faculty data');
                }
                const data = await response.json();
                setFacultyArray(data);
            } catch (error) {
                console.error('Error fetching faculty data:', error);
            }
        };

        fetchFacultyData();
    }, []);

    return (
        <div className="Faculty">
            <div className='teams-subheading'>
                <h2>Faculty Co-ordinators</h2>
            </div>
            <div className="student">
                <Roles teamArray={facultyArray} />
            </div>
        </div>
    );
};

export default Faculty;
