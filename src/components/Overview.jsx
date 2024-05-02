import React from "react";
import "./overview.css";
import Widgets from "./Widgets";
function Overview() {
  return (
    <>
      <div className="overview">
        <p>Overview</p>
        <div className="btns">
          <button className="month-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M18 2V4M6 2V4"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 8H20.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 8H21"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            May,2024
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="customize-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5C14 15.567 15.567 14 17.5 14C19.433 14 21 15.567 21 17.5Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M17.5 14H6.5C4.567 14 3 15.567 3 17.5C3 19.433 4.567 21 6.5 21H17.5C19.433 21 21 19.433 21 17.5C21 15.567 19.433 14 17.5 14Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M3 6.5C3 8.433 4.567 10 6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M6.5 3H17.5C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            Customize
          </button>
        </div>
      </div>
      <Widgets/>
    </>
  );
}

export default Overview;
