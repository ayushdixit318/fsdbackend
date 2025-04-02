import React from 'react'
import axios from 'axios'
const Update = () => {
    const handleUpdate = async(e) => {
        e.preventDefault()
        const id = e.target.id.value
        const name= e.target.name.value
        const age= e.target.age.value
        const data={name,age}        
        await axios.put(`https://fsdbackend1.onrender.com/users/${id}`,data)
        alert('User updated successfully')
      }
  return (
    <div>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
            <label>User ID:</label><input type="number" name="id" /> <br/>
            <label>Name:</label><input type="text" name="name" /> <br/>
            <label>Age:</label><input type="number" name="age"/> <br/>
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default Update