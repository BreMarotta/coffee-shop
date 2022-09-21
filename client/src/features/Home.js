import React, { useContext } from 'react'
import { Context } from '../Context'


const Home = () => {
  const { loggedIn } = useContext(Context)

  if(!loggedIn){
     return (
    <div>Home</div>
  )
  }
  return(
    <div>LoggedIn so there will be owner specific info</div>
 )
}

export default Home