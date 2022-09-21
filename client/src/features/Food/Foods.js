import React, { useContext } from 'react';
import { Context } from '../../Context';

const Foods = () => {
  const { loggedIn } = useContext(Context)

  if(!loggedIn){
     return (
    <div>Foods</div>
  )
  }
  return(
    <div>LoggedIn so there will be info and food forms</div>
 )
}

export default Foods