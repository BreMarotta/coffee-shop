import React, { useContext } from 'react'
import { Context } from '../Context'

const Ingredients = () => {
  const { loggedIn } = useContext(Context)

  if(!loggedIn){
     return (
    <div>Announcements</div>
  )
  }
  return(
    <div>LoggedIn so there will be info and ingredient forms</div>
 )
}

export default Ingredients