import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdul Hanan </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            I am currently employed as a software developer at Devsinc.
            <br />
            I have 3+ years of experience of developing and testing multiple features in an agile environment, using Ruby on Rails,
             NodeJS, NestJs, JavaScript, React.js, and Redux, Chrome extensions, Big Query, Redshift, Kafka. 
             My expertise encompasses the entire Software Development Life Cycle (SDLC), 
             which includes tasks such as defining functional specifications, conducting analysis, creating designs, 
             documentation, programming, testing, implementing solutions, and managing ongoing maintenance.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs and Watching Movies.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abdul Hanan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
