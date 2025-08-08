import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              "Meet Your <span className="purple">DevOps Dynamo! �⚡ </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body">
              When CI/CD pipelines need a hero,{" "}
              <b className="purple"> Jenkins & Git </b> answer the call—deploys
              so smooth, they feel illegal. 🦸‍♂️
              <br />
              Infrastructure as Code? More like Infrastructure as ‘Oh Wow, It
              Just Works’—
              <b className="purple"> Terraform, Ansible, and Vagrant </b> are my
              trusty sidekicks.
              <br />
              Containers? Dockerized. Orchestrated?{" "}
              <b className="purple"> Kubernetes-approved </b>. ☸️ (Kubectl
              commands flow from my fingers like magic spells.)
              <br />
              <b className="purple"> AWS </b>clouds part when I log in. ☁️ "Let
              there be scalable infrastructure!" And there was. <br />
              Monitoring? <b className="purple">Prometheus and Splunk</b>
              whisper sweet nothings—"Your uptime is flawless, darling."
              <br />
              Scripting? <b className="purple"> Python & Bash </b> are my love
              languages. 💻 ❤️
              <br />
              And when I’m feeling fancy—
              <b className="purple"> JavaScript, React, Node, Next, or Java </b>
              turn "Wait, how?" into "Wait, that was fast." So if you need
              someone to automate the chaos, optimize the madness, and maybe
              deploy a dad joke or two—I’m your engineer. 😎"
              <br />
              (Now let’s go make some git push magic happen.) 🚀
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                height={400}
                width={400}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AlankarShete"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alankarshete/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/its.me.alankar/"
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
