import React from 'react';
import { 
  FaHome, 
  FaEnvelope, 
  FaBookOpen, 
  FaClipboardList, 
  FaUsers, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';
import './LeftSidebar.css';

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-icon">
          <div className="logo-star">★</div>
        </div>
        <span className="logo-text">COURSUE</span>
      </div>

      {/* Overview Section */}
      <div className="menu-section">
        <h3 className="section-title">OVERVIEW</h3>
        <div className="menu-items">
          <div className="menu-item active">
            <FaHome className="menu-icon" />
            <span className="menu-text">Dashboard</span>
          </div>
          <div className="menu-item">
            <FaEnvelope className="menu-icon" />
            <span className="menu-text">Inbox</span>
          </div>
          <div className="menu-item">
            <FaBookOpen className="menu-icon" />
            <span className="menu-text">Lesson</span>
          </div>
          <div className="menu-item">
            <FaClipboardList className="menu-icon" />
            <span className="menu-text">Task</span>
          </div>
          <div className="menu-item">
            <FaUsers className="menu-icon" />
            <span className="menu-text">Group</span>
          </div>
        </div>
      </div>

      {/* Friends Section */}
      <div className="menu-section">
        <h3 className="section-title">FRIENDS</h3>
        <div className="friends-list">
          {[1, 2, 3].map((index) => (
            <div key={index} className="friend-item">
              <div className="friend-avatar">
                <div className="avatar-placeholder">👤</div>
              </div>
              <div className="friend-info">
                <div className="friend-name">Prashant</div>
                <div className="friend-role">Software Developer</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Section */}
      <div className="menu-section">
        <h3 className="section-title">SETTINGS</h3>
        <div className="menu-items">
          <div className="menu-item">
            <FaCog className="menu-icon" />
            <span className="menu-text">Settings</span>
          </div>
          <div className="menu-item logout">
            <FaSignOutAlt className="menu-icon" />
            <span className="menu-text">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
