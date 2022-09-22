import React, { useContext } from 'react'
import { Context } from '../Context'

const Ingredients = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <div>Form goes here</div> : <></>

  return (
    <div>
      Announcements
      {displayForm}
    </div>
  )
}

export default Ingredients