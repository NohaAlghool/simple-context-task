import React from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from './nav/Home'
import About from './nav/About'
import { UserContext } from '../UserContext'

function LessonContext() {
  return (

    <div>
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/" className='link' >Home</Link>
          </li>
          <li>
            <Link to="/about" className='link'>About</Link>
          </li>
        </ul>
      </nav>

      <UserContext.Provider value="Hello from context">
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />


        </Routes>
      </UserContext.Provider>




    </div>

  )
}

export default LessonContext