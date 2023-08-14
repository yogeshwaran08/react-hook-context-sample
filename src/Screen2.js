import React, { useReducer } from 'react'
import { Handler } from './Context'

const Screen2 = () => {

  const {username, changeUseranme} = Handler();

  return (
    <div>
      <h3>Screen 2</h3>
      <p>Username : {username}</p>
    </div>
  )
}

export default Screen2