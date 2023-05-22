import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nimble from "../../Assets/Projects/nimble.png";
import headsup from "../../Assets/Projects/headsup.png";
import sonicapp from "../../Assets/Projects/sonicapp.png";
import shushhh from "../../Assets/Projects/shushhh.png";
import prioritynews from "../../Assets/Projects/prioritynews.png";
import disastercast from "../../Assets/Projects/disastercast.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Check out a few projects I've worked on recently!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shushhh}
              isBlog={false}
              title="Shushhh"
              description="An Android app that silences your phone based on location and time constraints. Built using Android Studio and published to the Google Play Store."
              ghLink="https://github.com/Shushhh/ShushAndroid"
              demoLink="https://play.google.com/store/apps/details?id=shush.android.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disastercast}
              isBlog={false}
              title="DisasterCast"
              description="SMS Broadcasting service that can be registered with during times of disaster by both those in need and charitable organizations. Created at HackGSU using MongoDB and Twilio. Won StateFarm's 100ForGood Challenge and Best Use of Twilio."
              ghLink="https://github.com/mpurushothapu3/DisasterCast/tree/master"
              demoLink="https://devpost.com/software/disastercast"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sonicapp}
              isBlog={false}
              title="Sonic"
              description="A marketing tool developed for KwikTrip to allow for faster creation of custom marketing promotions and tracking customer loyalty. Created at the NCR company-wide hackathon using React and Firebase."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://sonic-hackathon.web.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nimble}
              isBlog={false}
              title="Nimble"
              description="Next-gen checkout system allowing merchants to scan items from catalog and track IPM (items per minute). Created at UGAHacks using Android Studio and NCR's BSP Catalog API for to store item data."
              ghLink="https://github.com/pantharex/NimbleUGAHacks"
              demoLink="https://devpost.com/software/nimble-vs7rig"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prioritynews}
              isBlog={false}
              title="PriorityNews"del 
              description="A news recommendation system algorithm conducive to democracy and social good. Built at HackGT using Python's BeautifulSoup and Urllib packages alongside NewsAPI."
              ghLink="https://github.com/pantharex/HackGT7"
              demoLink="https://devpost.com/software/prioritynews" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={headsup}
              isBlog={false}
              title="Heads-Up: Spoiler Blocker"
              description="Ever want to learn about a TV show or movie or look at something a friend sent you without being spoiled? Use Heads-Up: Spoiler Blocker to block out any spoilers so you can look safely. 
              Created using HTML/CSS/Javascript and Chrome's web extension architecture."
              ghLink="https://github.com/VinnieKhanna/SpoilerBlocker"
              demoLink="https://devpost.com/software/heads-up-spoilerblocker"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
