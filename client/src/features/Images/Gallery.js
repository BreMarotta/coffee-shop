import React, { useContext } from 'react'
import { Context } from '../../Context'

const Gallery = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <div>Form goes here</div> : <></>
  
  return (
    <div>
      Gallery
      {displayForm}
    </div>
  )
}

export default Gallery