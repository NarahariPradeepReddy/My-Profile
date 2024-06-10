import React from 'react'
import { Divider } from '@mui/material'

export default function Footer() {
  return (
    <div>
     <Divider
          style={{
            fontWeight: "bold",
            border: "1px solid black", margin: "0px 20px",
          }}
        />
    <footer style={footerStyle}>
      <p>Connect with me on <a href='https://www.linkedin.com/in/pradeep-kumar-a09573279/'>LinkedIn</a></p>
    </footer>
    </div>
  )
}

const footerStyle = {
    textAlign: "center",
    margin: "20px",
    color: "red",
    fontSize: "20px",
    fontWeight: 600
}