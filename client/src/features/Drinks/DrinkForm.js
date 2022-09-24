import React, { useState } from 'react'

const DrinkForm = () => {
    const [drinkObj, setDrinkObj] = useState({
        name: "",
        description: "",
        active: true,
        img: "",
        notes: ""
    })

  return (
    <div>DrinkForm</div>
  )
}

export default DrinkForm