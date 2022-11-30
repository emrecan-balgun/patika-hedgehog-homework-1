import React from 'react'

function Welcome(props) {
  return (
    <h1 className="text-3xl font-bold p-4 text-center">
        {props.message}
    </h1> 
  )
}

export default Welcome