import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import buzzbird from "../../Assets/Projects/buzzbird thumbnail.png";
import quiz from "../../Assets/Projects/Quiz.png";
import tour from "../../Assets/Projects/tour.png";
import project from "../../Assets/Projects/project.png";

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
              imgPath={buzzbird}
              isBlog={false}
              title="BuzzBird"
              description="A Social Media App to connect and hangout with friends build with react.js, TailwindCSS, Material-UI Components, and mockBee. Have features which allows user for add/delete/edit posts, edit user profile."
              ghLink="https://github.com/AlankarShete/Social-Media-App"
              demoLink="https://buzzbird-v1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz"
              description="Quiz App."
              ghLink="https://github.com/AlankarShete/React-Quiz-App/tree/gh-pages"
              demoLink="alankarshete.github.io/React-Quiz-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Mail App"
              description="An Project management app where you can schedule your project at ease."
              ghLink="https://github.com/AlankarShete/Project-Management-React-App/tree/gh-pages"
              demoLink="alankarshete.github.io/Project-Management-React-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="Banana - Talk"
              description="An react app which helps you to manage your bucket list to travel through amazing places in world. An will help you to automatically schedule the places nearest to you so that you can start. So no need to wait lets which place should visit first!!!"
              ghLink="https://github.com/AlankarShete/Tour-Bucket-List/tree/gh-pages"
              demoLink="alankarshete.github.io/Tour-Bucket-List/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
