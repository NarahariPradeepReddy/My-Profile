import React from 'react'

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Connect with me on <a href='https://www.linkedin.com/in/pradeep-kumar-a09573279/'>LinkedIn</a></p>
    </footer>
  )
}

const footerStyle = {
    textAlign: "center",
    margin: "20px",
    color: "red",
    fontSize: "20px",
    fontWeight: 600
}