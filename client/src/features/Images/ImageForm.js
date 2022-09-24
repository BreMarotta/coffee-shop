import React, { useState } from 'react'

const ImageForm = () => {
    const [imageObj, setImageObj] = useState({
        title: "",
        active: true,
        img: ""
    })
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(imageObj)
      fetch('/images', {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(imageObj)
      })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleChange = (e) => {
      const newObj = {...imageObj, [e.target.name]: e.target.value};
      setImageObj(newObj)
  }

  const toggleActive = (e) => {
      const newObj = {...imageObj, ["active"]: !imageObj.active}
      setImageObj(newObj)
  }

return (
  <form onSubmit={handleSubmit}>
      <h1>Add Announcement</h1>
      <hr/>
      <label>Title: </label>
          <input type="text" name="title" value={imageObj.title} onChange={handleChange}/>
          <br/><br/>
      <label>Image: </label>
          <input type="text" name="img" value={imageObj.img} onChange={handleChange}/>
          <br/><br/>
      <label>Active ? </label>
          <input type="checkbox" checked={imageObj.active} onChange={toggleActive}/>
          <br/><br/>
      <button type="submit">Save</button>
      <br/><br/>
  </form>
)
}

export default ImageForm