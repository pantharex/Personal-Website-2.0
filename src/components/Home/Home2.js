import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sahilphoto.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A QUICK <span className="purple"> INTRODUCTION </span> 
            </h1>
            <p className="home-about-body">
              I started coding in 12th grade, and I've been hooked since. From hackathons to work-related projects, I'm always moving towards to my next big endeavor!
              <br />
              <br />I'm fluent in many languages, but my favorites are
              <i>
                <b className="purple"> Python and C++ </b>.
              </i>
              <br />
              <br />
              Most of my expertise lies in &nbsp;
              <i>
                <b className="purple">Web/Mobile Technologies and Tools</b> 
              </i>
              , but I also delve in {" "}
              <i>
              <b className="purple">
                  Machine Learning and Computer Vision.
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Social <b className="purple">Media</b></h1>
            <p>
              Go ahead and <span className="purple">add </span>me on all these platforms!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pantharex"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100006927465647"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sahil-sudhir-826b1a145/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sahil_sudhir123/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
