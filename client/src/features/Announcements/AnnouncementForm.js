import React, { useState } from 'react'

const AnnouncementForm = () => {
    const [announcementsObj, setAnnouncementsObj] = useState({
        title: "",
        msg: "",
        active: true,
        img: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(announcementsObj)
        fetch('/announcements', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(announcementsObj)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const handleChange = (e) => {
        const newObj = {...announcementsObj, [e.target.name]: e.target.value};
        setAnnouncementsObj(newObj)
    }

    const toggleActive = (e) => {
        const newObj = {...announcementsObj, ["active"]: !announcementsObj.active}
        setAnnouncementsObj(newObj)
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1>Add Announcement</h1>
        <hr/>
        <label>Title: </label>
            <input type="text" name="title" value={announcementsObj.title} onChange={handleChange}/>
            <br/><br/>
        <label>Message: </label>
            <textarea type="text" name="msg" value={announcementsObj.msg} onChange={handleChange}/>
            <br/><br/>
        <label>Image: </label>
            <input type="text" name="img" value={announcementsObj.img} onChange={handleChange}/>
            <br/><br/>
        <label>Active ? </label>
            <input type="checkbox" checked={announcementsObj.active} onChange={toggleActive}/>
            <br/><br/>
        <button type="submit">Save</button>
        <br/><br/>
    </form>
  )
}

export default AnnouncementForm