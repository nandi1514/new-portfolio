import React from "react";
import "./Project.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Project = () => {
  return (
    <div className="projects" id="projects">
      <div className="title">
        <span className="no">03.</span>
        <h1>&nbsp; Projects I've Build</h1>
      </div>
      <div className="project-card">
        <div className="project-image">
          <img src="./images/color-combo-green.jpg" alt="project" />
        </div>
        <div className="project-text">
          <span>Featured Text</span>
          <h2>Project Title</h2>
          <div className="project-description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              obcaecati facilis laboriosam nam dolore ad impedit iste pariatur
              non provident?
            </p>
          </div>
        </div>
      </div>

      <div className="title">
        <span className="no">Other projects</span>
      </div>
      <div className="other-projects">
        <div className="small-project-card">
          <div className="title">
            <span className="no">
              Other Project Title
              <GitHubIcon />
              <LaunchIcon />
            </span>
          </div>
          <h3>Other Project Title</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            accusamus in perferendis similique aperiam labore fuga totam dolores
            harum! Totam.
          </p>
          <ul>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>React-Router-DOM</li>
          </ul>
        </div>

        <div className="small-project-card">
          <div className="title">
            <span className="no">
              Other Project Title
              <GitHubIcon />
              <LaunchIcon />
            </span>
          </div>
          <h3>Other Project Title</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            accusamus in perferendis similique aperiam labore fuga totam dolores
            harum! Totam.
          </p>
          <ul>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>React-Router-DOM</li>
          </ul>
        </div>

        <div className="small-project-card">
          <div className="title">
            <span className="no">
              Other Project Title
              <GitHubIcon />
              <LaunchIcon />
            </span>
          </div>
          <h3>Other Project Title</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            accusamus in perferendis similique aperiam labore fuga totam dolores
            harum! Totam.
          </p>
          <ul>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>React-Router-DOM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
