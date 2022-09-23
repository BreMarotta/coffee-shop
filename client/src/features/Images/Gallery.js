import React, { useContext } from 'react'
import { Context } from '../../Context'
import ImageForm from './ImageForm'

const Gallery = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <ImageForm /> : <></>
  
  return (
    <div>
      {displayForm}
      Gallery
      
    </div>
  )
}

export default Gallery