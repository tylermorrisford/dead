import React from 'react';
import Confetti from 'react-dom-confetti';

const TopConfetti = (props) => {

    const topConfig = {
        angle: 200,
        spread: 360,
        startVelocity: 40,
        elementCount: "120",
        dragFriction: 0.12,
        duration: "3520",
        stagger: 3,
        width: "10px",
        height: "10px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#5e1DF0", "#78ff44", "#ff718d", "#fdff6a", "#fff238"]
    };

    return (
        <>
            <div style={{ marginLeft: '80%' }}>
                <Confetti active={props} config={topConfig} />
            </div>
            <div style={{ marginLeft: '20%' }}>
                <Confetti active={props} config={topConfig} />
            </div>
        </>
    )

}

export default TopConfetti