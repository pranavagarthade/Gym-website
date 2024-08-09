import React from "react";
import './Programs.css';
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import { Link } from 'react-router-dom';

const Programs = () => {
    return (
        <div className="Programs" id="programs">
        {/* Header */}
        <div className="programs-header">
            <span className="stroke-text">Explore our</span>
            <span>Programs</span>
            <span className="stroke-text">to shape you</span>

        </div>

        <div className="program-categories">
            {programsData.map((program) => (
                <div className="category" key={program.heading}>
                      <img src={program.image} alt={program.heading} />                    
                     <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <Link className="join-now" to={program.path}>
                    <span>Learn more</span><img src={RightArrow} alt="" />
            </Link>
                </div>
            ))}
        </div>

        </div>
    )
}

export default Programs