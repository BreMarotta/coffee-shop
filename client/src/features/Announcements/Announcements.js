import React, { useContext } from 'react'
import { Context } from '../../Context'
import AnnouncementForm from './AnnouncementForm'

const Announcements = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <AnnouncementForm /> : <></>

    return (
    <div>
      {displayForm}
      Announcements
    </div>
  )

}

export default Announcements