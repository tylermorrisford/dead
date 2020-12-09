import React from 'react';
import Confetti from 'react-dom-confetti';

const TopConfetti = (props) => {

    const bottomConfig = {
        angle: 270,
        spread: 180,
        startVelocity: 40,
        elementCount: "120",
        dragFriction: 0.12,
        duration: "3520",
        stagger: 4,
        width: "10px",
        height: "10px",
        perspective: "400px",
        colors: ["#a864fd", "#29cdff", "#5e1DF0", "#78ff44", "#ff718d", "#fdff6a", "#fff238"]
      };

    return (
        <>
        <Confetti active={props} config={bottomConfig}/>
        <div style={{marginLeft: '99%'}}>
        <Confetti active={props} config={bottomConfig}/>
        </div>
        </>
    )

}

export default TopConfetti