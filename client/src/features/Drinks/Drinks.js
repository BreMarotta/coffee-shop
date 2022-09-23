import React, { useContext } from 'react';
import { Context } from '../../Context';
import DrinkForm from './DrinkForm';

const Drinks = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <DrinkForm /> : <></>

  return (
    <div>
      {displayForm}
      Drinks
      
    </div>
  )

}

export default Drinks