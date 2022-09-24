import React, { useState } from 'react'

const FoodForm = () => {
    const [foodObj, setFoodObj] = useState({
        name: "",
        description: "",
        active: true,
        img: "",
        notes: ""
    })

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(foodObj)
      fetch('/foods', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(foodObj)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleChange = (e) => {
      const newObj = {...foodObj, [e.target.name]: e.target.value};
      setFoodObj(newObj)
  }

  const toggleActive = (e) => {
      const newObj = {...foodObj, ["active"]: !foodObj.active}
      setFoodObj(newObj)
  }

return (
  <form onSubmit={handleSubmit}>
      <h1>Add Drink</h1>
      <hr/>
      <label>Name: </label>
          <input type="text" name="name" value={foodObj.name} onChange={handleChange}/>
          <br/><br/>
      <label>Description: </label>
          <textarea type="text" name="description" value={foodObj.description} onChange={handleChange}/>
          <br/><br/>
      <label>Image: </label>
          <input type="text" name="img" value={foodObj.img} onChange={handleChange}/>
          <br/><br/>
      <label>Notes: </label>
          <textarea type="text" name="notes" value={foodObj.notes} onChange={handleChange}/>
          <br/><br/>
      <label>Active ? </label>
          <input type="checkbox" checked={foodObj.active} onChange={toggleActive}/>
          <br/><br/>
      <button type="submit">Save</button>
      <br/><br/>
  </form>
)
}

export default FoodForm