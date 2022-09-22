import React, { useContext } from 'react'
import { Context } from '../Context'


const Home = () => {
  const { loggedIn } = useContext(Context)

  const displayLoggedIn = loggedIn ? <div>logged in so admin info</div> : <></>
  
  return (
    <div>
      Home
      {displayLoggedIn}
    </div>
  )
 
}

export default Home