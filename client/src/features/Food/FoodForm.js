import React, { useState } from 'react'

const FoodForm = () => {
    const [foodObj, setFoodObj] = useState({
        name: "",
        description: "",
        active: true,
        img: "",
        notes: ""
    })
  return (
    <div>FoodForm</div>
  )
}

export default FoodForm