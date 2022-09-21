import React, { useContext } from 'react';
import { Context } from '../../Context';

const Drinks = () => {
  const { loggedIn } = useContext(Context)

  if(!loggedIn){
     return (
    <div>Drinks</div>
  )
  }
  return(
    <div>LoggedIn so there will be info and drink forms</div>
 )
}

export default Drinks