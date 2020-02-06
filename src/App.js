import React, { useState } from 'react';
import { Header, DateTime, Typewriter, GithubCorner, CopyEmailAddressToClipboard } from './components';
import { Row, Col } from 'react-flexbox-grid';
import api from './api';

const myEmail = "matthewpoestreich@gmail.com";

function App() {
    const [skillLevel, setSkillLevel] = useState();
    const [showEmail, setShowEmail] = useState(false);

    const handleHoverIcon = (name, skill) => setSkillLevel({ name, skill });
    const toggleShowEmail = () => setShowEmail(!showEmail);

    return (
        <div>
            <GithubCorner url="https://github.com/oze4/portfolio-mattoestreich" title="Source code for this website" />
            
            <Row center="xs">
                <Col xs={12}><DateTime now classes="sans-serif mt3" /></Col>
            </Row>

            <Row center="xs" middle="xs" className="h-90vh">
                <Col xs={12}>
                    <Header label="Hi, I'm" size="sm" />
                    <Header label="Matt Oestreich" size="lg" />

                    <Row center="xs">
                        <Col xs={12} className="mv3">
                            <Typewriter
                                element="div"
                                classes="sans-serif f5 f4-ns"
                                messages={api.descriptionWords} 
                            />
                        </Col>
                    </Row>

                    <Row center="xs" middle="xs" className="mt3">
                        <Col xs={12} sm={12} md={6} lg={6} className="f2 f1-ns mw-100">
                            {api.iconLinks.map((i, index) => {
                                let Icon = i.icon;
                                return i.url ? (
                                    <a key={i.url} href={i.url} target="_blank" rel="noopener noreferrer" className={index > 0 ? "ml4" : ""}>
                                        <Icon className="cursor-point pop-hover pa1" />
                                    </a>
                                ) : <Icon key={i.url} onClick={toggleShowEmail} className={`cursor-point pop-hover pa1 ${index > 0 ? "ml4" : ""}`} />
                            })}
                        </Col>
                    </Row>

                    {showEmail ? <CopyEmailAddressToClipboard onCopied={toggleShowEmail} emailAddress={myEmail} /> : ""}
                    
                    <Row center="xs" middle="xs" className="mt5">
                        <Col xs={10} sm={6} md={4} lg={4} className="f3 f3-ns pad-right-1rem">
                            {api.iconSkills.map(i => {
                                let SkillIcon = i.icon;
                                return (
                                    <SkillIcon
                                        onClick={() => handleHoverIcon(i.title, i.skill)}
                                        onMouseOver={() => handleHoverIcon(i.title, i.skill)}
                                        onMouseLeave={() => handleHoverIcon(null, null)}
                                        height="1em"
                                        width="1em"
                                        className="ml3 pop-hover pa1"
                                        key={i.title} />
                                );
                            })}
                        </Col>
                    </Row>

                    <Row center="xs">
                        <div className="sans-serif i ttu mt1 f7 w-100">
                            {skillLevel && skillLevel.name !== null && skillLevel.skill !== null
                                ? (
                                    <>
                                        <small><b>name:</b></small>
                                        {` ${skillLevel && skillLevel.name} `}
                                        <small><b>skill:</b></small>
                                        {` ${skillLevel && skillLevel.skill}% `}
                                    </>
                                ) : <small>hover or click for skill level</small>}
                        </div>
                    </Row>

                </Col>
            </Row>
        </div>
    );
}

export default App;