import React, { useState } from 'react'

const DrinkForm = () => {
    const [drinkObj, setDrinkObj] = useState({
        name: "",
        description: "",
        active: true,
        img: "",
        notes: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(drinkObj)
        fetch('/drinks', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(drinkObj)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleChange = (e) => {
        const newObj = {...drinkObj, [e.target.name]: e.target.value};
        setDrinkObj(newObj)
    }

    const toggleActive = (e) => {
        const newObj = {...drinkObj, ["active"]: !drinkObj.active}
        setDrinkObj(newObj)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Add Drink</h1>
        <hr/>
        <label>Name: </label>
            <input type="text" name="name" value={drinkObj.name} onChange={handleChange}/>
            <br/><br/>
        <label>Description: </label>
            <textarea type="text" name="description" value={drinkObj.description} onChange={handleChange}/>
            <br/><br/>
        <label>Image: </label>
            <input type="text" name="img" value={drinkObj.img} onChange={handleChange}/>
            <br/><br/>
        <label>Notes: </label>
            <textarea type="text" name="notes" value={drinkObj.notes} onChange={handleChange}/>
            <br/><br/>
        <label>Active ? </label>
            <input type="checkbox" checked={drinkObj.active} onChange={toggleActive}/>
            <br/><br/>
        <button type="submit">Save</button>
        <br/><br/>
    </form>
  )
}

export default DrinkForm