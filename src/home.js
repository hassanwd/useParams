import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <h3>home page
        
            <ul>
              <Link to="/page/123">  <li>Ahmad</li> </Link>
              <Link to="/page/456">  <li>Hassan</li>   </Link>
            </ul>
        
         </h3>
  )
}

export default Home