import React from 'react';
import { FaBell, FaCog, FaUser, FaPlus, FaEllipsisV } from 'react-icons/fa';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Your Profile Section */}
      <div className="profile-section">
        <div className="profile-header">
          <h3 className="section-title">Your Profile</h3>
          <FaEllipsisV className="menu-icon" />
        </div>
        
        <div className="profile-card">
          <div className="profile-image-container">
            <div className="profile-image">
              <div className="profile-placeholder">👨‍💼</div>
            </div>
            <div className="progress-ring">
              <svg className="progress-circle" viewBox="0 0 100 100">
                <circle
                  className="progress-background"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  className="progress-foreground"
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset="85"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          
          <div className="profile-info">
            <h2 className="greeting">Good Morning Prashant</h2>
            <p className="motto">Continue Your Journey And Achieve Your Target</p>
            
            <div className="profile-icons">
              <div className="profile-icon">
                <FaBell />
              </div>
              <div className="profile-icon">
                <FaCog />
              </div>
              <div className="profile-icon">
                <FaUser />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Chart */}
      <div className="progress-chart-section">
        <div className="chart-container">
          <div className="chart-bars">
            {[40, 60, 30, 80, 50, 70, 45].map((height, index) => (
              <div key={index} className="chart-bar">
                <div 
                  className="bar-fill" 
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Your Mentor Section */}
      <div className="mentor-section">
        <div className="mentor-header">
          <h3 className="section-title">Your Mentor</h3>
          <div className="add-mentor">
            <FaPlus />
          </div>
        </div>
        
        <div className="mentor-list">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="mentor-item">
              <div className="mentor-avatar">
                <div className="avatar-placeholder">👤</div>
              </div>
              <div className="mentor-info">
                <div className="mentor-name">Prashant Kumar Singh</div>
                <div className="mentor-role">Software Developer</div>
              </div>
              <button className="follow-button">Follow</button>
            </div>
          ))}
        </div>
        
        <button className="see-all-button">See All</button>
      </div>
    </div>
  );
};

export default RightSidebar;
