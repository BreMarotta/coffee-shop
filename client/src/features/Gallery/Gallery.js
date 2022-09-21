import React, { useContext } from 'react'
import { Context } from '../../Context'

const Gallery = () => {
  const { loggedIn } = useContext(Context)

  if(!loggedIn){
     return (
    <div>Gallery</div>
  )
  }
  return(
    <div>LoggedIn so there will be info and gallery forms</div>
 )
}

export default Gallery