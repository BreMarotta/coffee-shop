import React, { useContext } from 'react';
import { Context } from '../../Context';

const Foods = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <div>Form will go here</div> : <></>

  return (
    <div>
      Foods
      {displayForm}
    </div>
  )

}

export default Foods