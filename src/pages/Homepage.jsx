import { Link } from "react-router-dom";
import React from "react";

const Homepage = () => {
  return (
    <div className="app-background app-container">
      <div className="row">
        <div className="col-md-5 d-flex flex-column align-items-center">
          <img
            src="/images/profile_pic.png" // Replace with the path to your image
            alt="Profile Picture"
            className="profile-picture rounded-circle m-2 border border-3 border-light"
          />
            <h2 className="text-center  p-1 text-light"><strong>Matthew Moriarty</strong></h2>
        </div>
        <div className="col-md-7">
          <p className='text-left text-light pt-5 p-2'>
            Hello! And welcome to my portfolio.<br />
            <br />
            I am currently enrolled in the ASU full-stack coding bootcamp, with an expected graduation on November 30th, 2023.
            Professionally, I have been in the software field for 3 years with a diverse background including technical support, and integrations.
            <br /> <br />
            Now, as a bootcamp student, I've expanded my skill set and added numerous technologies and methodologies to my toolbelt. Including but not limited to;<br />
            1. HTML & CSS <br />
            2. Vanilla Javascript <br />
            3. Relational Databases (MySQL)<br />
            4. NoSQL Databases <br />
            5. MVC framework <br />
            6. Routing and API's <br />
            7. Express JS <br />
            8. React <br /> <br />

            In my personal life, I have three cats, and more hobbies than I realistically have time for... <br />
            I play guitar and sing, read books, practice archery, and enjoy running and lifting weights as well.<br />
            With my wife, I love getting out on the weekends and playing tennis and golf, or checking out a new brewery or restaurant!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
