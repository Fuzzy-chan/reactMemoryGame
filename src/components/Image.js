import React from "react";
const imgStyle = {
  height: "200px",
  width: "150px",
  float: "left",
  padding: "5px"
}
const Image = props => (
<img src={props.image} alt="404 Cannot Find" style={imgStyle} onClick={ () => props.handleClick(props.id)}/>
);

export default Image;