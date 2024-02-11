import React from 'react'

function container({ name }) {
  return (
    <>
        <div className="widget" style={{ border: "2px solid #949BA4", borderRadius: "10px"}}>
            <h2 style={{ color: "#FFFFFF", fontWeight: "bold", padding: "5px" }} >{ name }</h2>
            
        </div>
    </>
  )
}

export default container