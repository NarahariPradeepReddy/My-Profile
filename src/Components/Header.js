import React from "react";
import Profilephoto from "../Images/Profilephoto.jpg";

export default function Header() {
  return (
    <header style={headerStyle}>
      <div style={headerContentStyle}>
        <div style={textContentStyle}>
          <h1>NARAHARI PRADEEP KUMAR REDDY</h1>
          <p style={{fontSize: "16px", fontWeight: 500}}>ReactJs Developer</p>
          <a href="mailto:pradeepnarahari294@gamil.com">
            pradeepnarahari294@gamil.com
          </a>
        </div>
        <img src={Profilephoto} alt="Profilephoto" style={imageStyle} />
      </div>
    </header>
  );
}
const headerStyle = {
  backgroundColor: "#4CAF50",
  color: "#ffff",
  padding: "12px 0px",
  margin: '20px'
};

const headerContentStyle = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  maxWidth: "800px",
};

const textContentStyle = {
  felx: "1",
};

const imageStyle = {
  height: "100px",
  width: "100px",
  borderRadius: "50%",
  marginLeft: "20px",
};
