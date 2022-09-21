import React, { useContext } from 'react'
import { Context } from '../Context'

const Announcements = () => {
  const { loggedIn } = useContext(Context)

  if(!loggedIn){
     return (
    <div>Announcements</div>
  )
  }
  return(
    <div>LoggedIn so there will be info and announcement forms</div>
 )
}

export default Announcements