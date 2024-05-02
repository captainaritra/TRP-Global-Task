import React from "react";
import "./applicationchart.css";
import AppChart from "./AppChart";
import ProfileImg from "../images/profile.jpg";

function ApplicationChart() {
  return (
    <>
      <div className="section-1">
        <div className="appli-card">
          <div className="appli-card-head">
            <h5 className="appli-card-title">Application Received Time</h5>
            <div className="time-period">
              <button>12 Months</button>
              <button>30 Days</button>
              <button>7 days</button>
            </div>
          </div>
          <AppChart />
        </div>
        <div className="side-part-1">
          <div className="schedule-card">
            <h5>Today's Schedule</h5>
            <p>6</p>
          </div>
          <div className="schedule">
            <div className="time">
              <p>10:30 AM</p>
            </div>
            <span className="icon icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                color="#9b9b9b"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <div className="schedule-work work-1">
              <img src={ProfileImg} alt="ProfileImage" />
              <img src={ProfileImg} alt="ProfileImage" />
              <p>Interview with Rafiqur Rahman</p>
            </div>
          </div>
          <div className="schedule">
            <div className="time">
              <p>12:00 PM</p>
            </div>
            <span className="icon icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                color="#9b9b9b"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="schedule-work work-2">
              <img src={ProfileImg} alt="ProfileImage" />
              <img src={ProfileImg} alt="ProfileImage" />
              <img src={ProfileImg} alt="ProfileImage" />
              <p>HR Team Meeting</p>
            </div>
          </div>
          <div className="schedule">
            <div className="time">
              <p>01:00 PM</p>
            </div>
            <span className="icon icon-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                color="#9b9b9b"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="schedule-work work-3">
              <img src={ProfileImg} alt="ProfileImage" />
              <p>Job Post - Design Lead....</p>
            </div>
          </div>
          <div className="schedule">
            <div className="time">
              <p>04:00 PM</p>
            </div>
            <span className="icon icon-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
                color="#9b9b9b"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div className="schedule-work work-4">
              <img src={ProfileImg} alt="ProfileImage" />
              <img src={ProfileImg} alt="ProfileImage" />
              <p>First Call with jawad Rahman</p>
            </div>
          </div>
          <div className="btn">
            <button>View All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationChart;
