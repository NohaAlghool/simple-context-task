import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'

function Home() {

    const msg = useContext(UserContext)
    return(
      <div>
        <h2 className='main'>Home</h2>
        <div className='main'>{msg}</div>
      </div>
    )
  
}

export default Home