import React, { useContext } from 'react';
import { Context } from '../../Context';
import FoodForm from './FoodForm';

const Foods = () => {
  const { loggedIn } = useContext(Context)

  const displayForm = loggedIn ? <FoodForm /> : <></>

  return (
    <div>
      {displayForm}
      Foods
      
    </div>
  )

}

export default Foods