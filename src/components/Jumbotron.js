import React from "react";

const Jumbotron = props => (
<div className="jumbotron">
    <h1>React Memory Game</h1>
    <h4>Test your memory! Select an image from below then the images shuffle. Try to not select an image you've already selected. You score each time you select a new image. Try to get the best score!</h4>
    <p>Score:{props.score}</p>
    <p>Top Score:{props.topScore}</p>
</div>
);

export default Jumbotron;