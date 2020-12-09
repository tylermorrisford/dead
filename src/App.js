import React, {useState, useEffect} from 'react';
import './index.css';
import Switch from "react-switch";

const App = () => {

const [checked, setChecked] = useState(false);
const [dead, setDead] = useState(false);
const [logged, setLogged] = useState(false);

const handleChange = () => {
  setChecked(!checked);
  setDead(!dead);
}

useEffect( () => {
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

  return (
    <>
    <div className="content" style={dead ? yesStyle : noStyle}>
       {dead ? 'Yes!' : 'No'}
      <div className="slider">
      <label style={{fontFamily: 'Optima', fontSize: '16px'}}>
        {dead ? <><span>he's dead.</span><br/></> : <><span>just for giggles, what if he was dead?  try it</span><br /></>}
        <Switch onColor='#5E1DF0' onChange={handleChange} checked={checked} />
      </label>
      </div>
    </div>
    </>
  );
}

export default App;
