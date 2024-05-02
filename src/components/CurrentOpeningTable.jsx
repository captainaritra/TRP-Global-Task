import React from "react";
import "./currentopeningtable.css";
import ProfileImg from "../images/profile.jpg";

function CurrentOpeningTable() {
  return (
    <>
      <div className="section-2">
        <div className="current-opening-table">
          <div className="table-title">
            <h5>Current Opening</h5>
            <button>View All</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Category</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Applied</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>Microsoft</p>Personal Assistant
                </td>
                <td>Administrative</td>
                <td>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      color="#9b9b9b"
                      fill="none"
                    >
                      <path
                        d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                    India
                  </span>
                </td>
                <td>$80k-$100k</td>
                <td>154</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    color="#9b9b9b"
                    fill="none"
                  >
                    <path
                      d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Microsoft</p>Personal Assistant
                </td>
                <td>Sales</td>
                <td>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      color="#9b9b9b"
                      fill="none"
                    >
                      <path
                        d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                    USA
                  </span>
                </td>
                <td>$80k-$100k</td>
                <td>540</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    color="#9b9b9b"
                    fill="none"
                  >
                    <path
                      d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Microsoft</p>Personal Assistant
                </td>
                <td>Marketing</td>
                <td>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      color="#9b9b9b"
                      fill="none"
                    >
                      <path
                        d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                    UK
                  </span>
                </td>
                <td>$80k-$100k</td>
                <td>883</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    color="#9b9b9b"
                    fill="none"
                  >
                    <path
                      d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>
                  <p>Microsoft</p>Personal Assistant
                </td>
                <td>Design</td>
                <td>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      color="#9b9b9b"
                      fill="none"
                    >
                      <path
                        d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                    France
                  </span>
                </td>
                <td>$80k-$100k</td>
                <td>738</td>
                <td>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="36"
                    height="36"
                    color="#9b9b9b"
                    fill="none"
                  >
                    <path
                      d="M21 12C21 11.1716 20.3284 10.5 19.5 10.5C18.6716 10.5 18 11.1716 18 12C18 12.8284 18.6716 13.5 19.5 13.5C20.3284 13.5 21 12.8284 21 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5C12.8284 13.5 13.5 12.8284 13.5 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M6 12C6 11.1716 5.32843 10.5 4.5 10.5C3.67157 10.5 3 11.1716 3 12C3 12.8284 3.67157 13.5 4.5 13.5C5.32843 13.5 6 12.8284 6 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="side-part-2">
          <div className="new-application-title">
            <h5>New Applications</h5>
            <button>View All</button>
          </div>
          <div className="new-application-list">
            <ul>
              <li>
                <div className="persons">
                  <span className="profiles">
                    <img src={ProfileImg} alt="Profile" />
                    <span className="person-name-role">
                      <p className="person-name">Esther Howard</p>
                      <span className="person-role">
                        <p>Applied for </p>
                        <p>Design Lead Positions</p>
                      </span>
                    </span>
                  </span>
                  <p className="apply-time">3 hours ago</p>
                </div>
              </li>
              <li>
                <div className="persons">
                  <span className="profiles">
                    <img src={ProfileImg} alt="Profile" />
                    <span className="person-name-role">
                      <p className="person-name">Dianne Russell</p>
                      <span className="person-role">
                        <p>Applied for </p>
                        <p>iOS Developer</p>
                      </span>
                    </span>
                  </span>
                  <p className="apply-time">5 hours ago</p>
                </div>
              </li>
              <li>
                <div className="persons">
                  <span className="profiles">
                    <img src={ProfileImg} alt="Profile" />
                    <span className="person-name-role">
                      <p className="person-name">Courtney Henry</p>
                      <span className="person-role">
                        <p>Applied for </p>
                        <p>Product Designer</p>
                      </span>
                    </span>
                  </span>
                  <p className="apply-time">Yesterday</p>
                </div>
              </li>
              <li>
                <div className="persons">
                  <span className="profiles">
                    <img src={ProfileImg} alt="Profile" />
                    <span className="person-name-role">
                      <p className="person-name">Devon Lane</p>
                      <span className="person-role">
                        <p>Applied for </p>
                        <p>iOS Developer</p>
                      </span>
                    </span>
                  </span>
                  <p className="apply-time">2 May, 2024</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentOpeningTable;
