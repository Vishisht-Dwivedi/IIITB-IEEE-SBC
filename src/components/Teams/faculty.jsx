import React, { useEffect, useRef } from 'react';
import './cards.css';
import Roles from './roles.jsx';
const teamArray = [
    {
        role: "Student Branch Coordinator",
        name: "Dr. Afreen Khursheed",
        key: 1
    },
    {
        role: "Student Branch Chapter Coordinator",
        name: "Dr. Rekha Kaushik",
        key: 2
    },
    {
        role: "IEEE Coordinator",
        name: "Dr. Gaurav Kumar Bharti",
        key: 3
    }
];
const Faculty = () => {
    return (
        <div className="Faculty">
            <div className='teams-subheading'>
                <h2>Faculty Co-ordinators</h2>
            </div>
            <div className="student">
                <Roles teamArray={teamArray} />
            </div>
        </div>
    );
};

export default Faculty;
