import React, { useContext } from 'react'
import { Context } from '../../Context'

const Announcements = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <div>Form</div> : <></>

    return (
    <div>
      Announcements
      {displayForm}
    </div>
  )

}

export default Announcements