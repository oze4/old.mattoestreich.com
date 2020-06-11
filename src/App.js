/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Header,
  DateTime,
  Typewriter,
  RopaSansP,
  GithubCorner,
  CopyEmailAddressToClipboard,
} from "./components";
import { Row, Col } from "react-flexbox-grid";
import api from "./api";

import "./app.css";
/* eslint-enable no-unused-vars */

const myEmail = "matthewpoestreich@gmail.com";

function App() {
  const [skillLevel, setSkillLevel] = useState();
  const [showEmail, setShowEmail] = useState(false);

  const handleHoverIcon = (name, skill) => setSkillLevel({ name, skill });
  const toggleShowEmail = () => setShowEmail(!showEmail);

  return (
    <div className="bg--lightgray">
      <GithubCorner
        url="https://github.com/oze4/portfolio-mattoestreich"
        title="Source code for this website"
      />

      <Row center="xs">
        <Col xs={12}>
          <DateTime now classes="sans-serif mt3" />
        </Col>
      </Row>

      <Row center="xs" middle="xs" className="h-90vh">
        <Col xs={12}>
          <Header label="Hi, I'm" size="sm" />
          <Header label="Matt Oestreich" size="lg" />

          <Row center="xs">
            <Col xs={12} className="mv3">
              {/*<Typewriter
                                element="div"
                                classes="sans-serif f5 f4-ns"
                                messages={api.descriptionWords} 
                            />*/}
              <RopaSansP style={{ fontSize: "1.5rem" }}>
                I thoroughly enjoy technology, programming, and learning
              </RopaSansP>
            </Col>
          </Row>

          <Row center="xs" middle="xs" className="mt3">
            <Col xs={12} sm={12} md={6} lg={6} className="f2 f1-ns mw-100">
              {api.iconLinks.map((i, index) => {
                let Icon = i.icon;
                return i.url ? (
                  <a
                    title={i.tooltip}
                    key={i.url}
                    href={i.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={index > 0 ? "ml4" : ""}
                  >
                    <Icon className="cursor-point pop-hover pa1" />
                  </a>
                ) : (
                  <Icon
                    title={i.tooltip}
                    key={i.url}
                    onClick={toggleShowEmail}
                    className={`cursor-point pop-hover pa1 ${index > 0 ? "ml4" : ""}`}
                  />
                );
              })}
            </Col>
          </Row>

          {showEmail ? (
            <CopyEmailAddressToClipboard onCopied={toggleShowEmail} emailAddress={myEmail} />
          ) : (
            ""
          )}

          <Row center="xs" middle="xs" className="mt5">
            <Col xs={10} sm={6} md={4} lg={4} className="f3 f3-ns pad-right-1rem">
              <RopaSansP style={{ margin: '0 0 10px 0', fontSize: "1rem" }}>
                My expierence includes, but is not limited to: <i><b>{` ${skillLevel && skillLevel.name ? skillLevel.name : ""} `}</b></i>
              </RopaSansP>
              {api.iconSkills.map((i) => {
                let SkillIcon = i.icon;
                return (
                  <SkillIcon
                    onClick={() => handleHoverIcon(i.title, i.skill)}
                    onMouseOver={() => handleHoverIcon(i.title, i.skill)}
                    onMouseLeave={() => handleHoverIcon(null, null)}
                    height="1em"
                    width="1em"
                    className="ml3 pop-hover pa1"
                    key={i.title}
                  />
                );
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
