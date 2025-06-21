import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aditi Garg </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            I am a final year student pursuing a B.Tech in Electronics and Communication Engineering.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Represented states Haryana and Madhya Pradesh in National level speed roller and ice skating championship.
            </li>
            <li className="about-activity">
              <ImPointRight /> Represented Gurgaon at state level badminton championship.
            </li>
            <li className="about-activity">
              <ImPointRight /> Wrote reports as a delegate in Model United Nations (MUN) assemblies.
            </li>
             <li className="about-activity">
              <ImPointRight /> Interned at Oriflame in the marketing sector, gaining valuable exposure to the cosmetics industry.
            </li>
             <li className="about-activity">
              <ImPointRight />  Achieved Alpha(A) grade in B-certificate in NCC(National Cadet Corps) Organisation.
            </li>
             <li className="about-activity">
              <ImPointRight /> Stood second position at inter NIT Tennis 2023-24 championship, representing NIT Surat Participated in INTER NIT Badminton tournament 2024-25
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aditi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard; 