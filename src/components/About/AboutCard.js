import React from "react";
import Card from "react-bootstrap/Card";
import { GiRoundStar, GiWeight, GiTennisBall } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey guys! I'm <span className="purple">Sahil Sudhir</span>
            , and I'm from a thriving (not so little anymore) community of <span className="purple"> Alpharetta, Georgia.</span>
            <br />
            <br />
            I am currently a second-year Master's student pursuing a MSCS degree at Georgia Tech in Computing Systems. I also did get my Bachelor's degree
            in Computer Science at Georgia Tech with my threads in <a href="https://www.cc.gatech.edu/academics/threads/intelligence" style={{ color: "#b2e7d7" }}>Intelligence</a> and <a href="https://www.cc.gatech.edu/academics/threads/information-internetworks" style={{ color: "#b2e7d7" }}>Information Internetworks</a>.
            <br />
            <br />
            Apart from programming, I love to keep myself busy with other activites!
          </p>
          <ul>
            <li className="about-activity">
              <GiRoundStar /> Casual Brawl Stars
            </li>
            <li className="about-activity">
              <GiWeight /> Calisthenics / Weight-Lifting
            </li>
            <li className="about-activity">
              <GiTennisBall /> Intramural Racquetball
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
