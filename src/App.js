import React, {useState} from 'react';
import './index.css';
import Switch from "react-switch";

const App = () => {

const [checked, setChecked] = useState(false);
const [dead, setDead] = useState(false);

const handleChange = () => {
  setChecked(!checked);
  setDead(!dead);
}

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
    {console.log("Please don't get offended, this is site is intended as a joke. The 'he' could literally be anyone.")}
    </>
  );
}

export default App;
