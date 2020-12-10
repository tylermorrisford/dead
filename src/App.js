import React, { useState, useEffect } from 'react';
import './index.css';
import Switch from "react-switch";
import Emoji from './components/Emoji';
import Confetti from 'react-dom-confetti';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { topConfig } from './components/topConfig'
import { bottomConfig } from './components/bottomConfig'


const App = () => {

  const [checked, setChecked] = useState(false);
  const [dead, setDead] = useState(false);
  const [logged, setLogged] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    setDead(!dead);
  }

  useEffect(() => {
    if (!logged) {
      console.log("Please don't get offended, this is site is intended as a joke. \nThe 'he' could literally be anyone.");
      setLogged(true);
    }
  }, [logged])

  const noStyle = {
    backgroundColor: 'black',
    color: 'white'
  }
  const yesStyle = {
    backgroundColor: '#FFF238',
    color: '#5E1DF0'
  }

  const nope = <><Emoji symbol="💩" label="poop" /> Nope <Emoji symbol="💩" label="poop" /></>
  const yep = <><Emoji symbol="😄" label="smiley" /> Yes! <Emoji symbol="😇" label="angelic-smiley" /></>

  const breakTag = <br />;

  return (
    <>
      <div style={{ marginLeft: '80%' }}>
        <Confetti active={dead} config={topConfig} />
      </div>
      <div style={{ marginLeft: '20%' }}>
        <Confetti active={dead} config={topConfig} />
      </div>
      <div className="content" style={dead ? yesStyle : noStyle}>
        <Container className="mt-3 mb-3 pt-5 pb-1 align-items-center" style={{ paddingTop: '4rem' }}>
          <Row>
            <Col md={{ span: 8, offset: 2 }} sm={12} >
              {dead ? yep : nope}
              <div className="slider">
                <label style={{ fontSize: '22px' }}>
                  {dead ? <><span>he's dead.</span><br /></> : <><span>but just for giggles,{window.innerWidth < 480 ? breakTag : ''} what if he was dead?  try it</span><br /></>}
                  <Switch offColor='#804221' onColor='#5E1DF0' onChange={handleChange} checked={checked} />
                </label>
              </div>
            </Col>
          </Row>
          <Confetti active={dead} config={bottomConfig} />
          <div style={{ marginLeft: '99%' }}>
            <Confetti active={dead} config={bottomConfig} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default App;
