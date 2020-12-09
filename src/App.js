import React, { useState, useEffect } from 'react';
import './index.css';
import Emoji from './components/Emoji';
import TopConfetti from './components/TopConfetti';
import BottomConfetti from './components/BottomConfetti';
import Switch from "react-switch";


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

  return (
    <>
      <TopConfetti props={dead} />
      <div className="content" style={dead ? yesStyle : noStyle}>
        <div style={{ paddingTop: '4em' }}>
          {dead ? yep : nope}
          <div className="slider">
            <label style={{ fontSize: '22px' }}>
              {dead ? <><span>he's dead.</span><br /></> : <><span>but just for giggles, what if he was dead?  try it</span><br /></>}
              <Switch offColor='#804221' onColor='#5E1DF0' onChange={handleChange} checked={checked} />
            </label>
          </div>
          <BottomConfetti props={dead} />
        </div>
      </div>
    </>
  );
}

export default App;
