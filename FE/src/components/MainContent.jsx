import React from 'react';
import { FaSearch, FaPlay, FaHeart, FaEllipsisV, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './MainContent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search your course here..." 
            className="search-input"
          />
        </div>
        <div className="profile-icon">
          <div className="profile-avatar">Y</div>
        </div>
      </div>

      {/* Online Course Banner */}
      <div className="banner-section">
        <div className="banner">
          <div className="banner-content">
            <div className="banner-tag">ONLINE COURSE</div>
            <h1 className="banner-title">Sharpen Your Skills With Professional Online Courses</h1>
            <button className="join-button">
              <FaPlay className="play-icon" />
              Join Now
            </button>
          </div>
          <div className="banner-decoration">
            <div className="sparkle">✨</div>
            <div className="sparkle">✨</div>
            <div className="sparkle">✨</div>
          </div>
        </div>
      </div>

      {/* Course Progress Cards */}
      <div className="progress-section">
        <div className="progress-header">
          <button className="nav-button">
            <FaChevronLeft />
          </button>
          <button className="nav-button">
            <FaChevronRight />
          </button>
        </div>
        <div className="progress-cards">
          {[1, 2, 3].map((index) => (
            <div key={index} className="progress-card">
              <div className="progress-icon">🔔</div>
              <div className="progress-text">2/8 Watched</div>
              <div className="progress-title">Product Design</div>
              <FaEllipsisV className="progress-menu" />
            </div>
          ))}
        </div>
      </div>

      {/* Continue Watching Section */}
      <div className="continue-watching-section">
        <h2 className="section-title">Continue Watching</h2>
        <div className="course-cards">
          {[
            {
              thumbnail: "code-screen",
              title: "Beginner's Guide To Becoming A Professional Frontend Developer",
              instructor: "Prashant Kumar Singh",
              role: "Software Developer",
              progress: 65
            },
            {
              thumbnail: "woman-smiling",
              title: "Beginner's Guide To Becoming A Professional Frontend Developer",
              instructor: "Prashant Kumar Singh",
              role: "Software Developer",
              progress: 45
            },
            {
              thumbnail: "red-haired-woman",
              title: "Beginner's Guide To Becoming A Professional Frontend Developer",
              instructor: "Prashant Kumar Singh",
              role: "Software Developer",
              progress: 30
            }
          ].map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-thumbnail">
                <div className={`thumbnail-image ${course.thumbnail}`}>
                  {course.thumbnail === 'code-screen' && <div className="code-lines">📱</div>}
                  {course.thumbnail === 'woman-smiling' && <div className="woman-text">How To Create Your Online Course Step 3</div>}
                  {course.thumbnail === 'red-haired-woman' && <div className="woman-text">LEARN SOFTWARE DEVELOPMENT WITH US!</div>}
                </div>
                <FaHeart className="heart-icon" />
              </div>
              <div className="course-content">
                <div className="course-tag">FRONTEND</div>
                <h3 className="course-title">{course.title}</h3>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${course.progress}%`}}></div>
                </div>
                <div className="instructor-info">
                  <div className="instructor-avatar">👤</div>
                  <div className="instructor-details">
                    <div className="instructor-name">{course.instructor}</div>
                    <div className="instructor-role">{course.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Mentor Table */}
      <div className="mentor-section">
        <div className="mentor-header">
          <h2 className="section-title">Your Mentor</h2>
          <a href="#" className="see-all-link">See All</a>
        </div>
        <div className="mentor-table">
          <div className="table-header">
            <div className="header-cell">INSTRUCTOR NAME & DATE</div>
            <div className="header-cell">COURSE TYPE</div>
            <div className="header-cell">COURSE TITLE</div>
            <div className="header-cell">ACTIONS</div>
          </div>
          <div className="table-body">
            <div className="table-row">
              <div className="table-cell instructor-cell">
                <div className="instructor-avatar">👤</div>
                <div className="instructor-info">
                  <div className="instructor-name">Prashant Kumar Singh</div>
                  <div className="instructor-date">25/2/2023</div>
                </div>
              </div>
              <div className="table-cell">
                <span className="course-type-tag">FRONTEND</span>
              </div>
              <div className="table-cell course-title">Understanding Concept Of React</div>
              <div className="table-cell">
                <button className="details-button">SHOW DETAILS</button>
              </div>
            </div>
            <div className="table-row">
              <div className="table-cell instructor-cell">
                <div className="instructor-avatar">👤</div>
                <div className="instructor-info">
                  <div className="instructor-name">Ravi Kumar</div>
                  <div className="instructor-date">25/2/2023</div>
                </div>
              </div>
              <div className="table-cell">
                <span className="course-type-tag">FRONTEND</span>
              </div>
              <div className="table-cell course-title">Understanding Concept Of React</div>
              <div className="table-cell">
                <button className="details-button">SHOW DETAILS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
