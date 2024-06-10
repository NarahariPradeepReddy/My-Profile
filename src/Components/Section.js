import React from 'react'

export default function Section({title, children}) {
  return (
    <div>
    <section style={sectionStyle}>
        <h2>{title}</h2>
        {children}      
    </section>
    </div>
  )
}

const sectionStyle = {
    margin: "20px",
    backgroundColor: "#ffff",
    backgroundRadius: "8px",
    padding: "3px",
    boxShadow: "1px 1px 7px #4CAF50"
}