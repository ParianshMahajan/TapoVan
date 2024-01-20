import React from 'react'
import "./Selector.css"

export default function Selector(props) {
  return (
    <div className={`selector ${props.details}`} >
        <p>Log in </p>
        <h4>{`As a ${props.details}`}</h4>
    </div>
  )
}
