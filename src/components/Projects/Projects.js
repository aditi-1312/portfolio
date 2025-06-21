import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SparkGrid"
              description="Tech Stack: ReactJS, NodeJS, Flask, Ethereum, MetaMask, scikit-learn, MongoDB, Tailwind CSS. Developed a comprehensive dashboard for tracking and selling carbon credits. Implemented energy consumption prediction using machine learning, enabling users to download detailed reports in Excel format. Integrated blockchain technology for enhanced transparency in energy generation and consumption tracking. Designed and implemented secure authentication and authorization using JWT tokens."
              ghLink="https://github.com/AditiGarg5/SparkGrid"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Car Management Platform"
              description="Tech Stack: ReactJS, NodeJS, ExpressJS, MongoDB, Tailwind CSS. Engineered a scalable backend using Node.js, Express.js, and MongoDB for efficient car management. Implemented role-based authentication and authorization for admins and clients. Optimized API request handling with Axios, improving request speed by 15%. Utilized Tailwind CSS for a modern, responsive, and maintainable UI design."
              ghLink="https://github.com/AditiGarg5/Car-Management-Platform"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects; 