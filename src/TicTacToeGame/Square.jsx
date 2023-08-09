import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid",
        height: "180px",
       borderColor:'black',
       borderWidth:"2px",
        width: "32%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      className="square"
    >
      <h1 className="ani" style={{
          fontSize:'50px',
         color:'#1284db',  
      }}> 
      
    {props.value}</h1>
 
    </div>
 
)};

export default Square;
