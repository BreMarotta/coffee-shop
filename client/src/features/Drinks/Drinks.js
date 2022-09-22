import React, { useContext } from 'react';
import { Context } from '../../Context';

const Drinks = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <div>Form goes here</div> : <></>

  return (
    <div>
      Drinks
      {displayForm}
    </div>
  )

}

export default Drinks