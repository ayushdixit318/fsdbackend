import React from 'react'
import axios from 'axios'

const AddBook = () => {
    const handlebook=async(e)=>{
        e.preventDefault()
        const title=e.target.title.value
        const author=e.target.author.value
        const date=e.target.date.value
        const image=e.target.image.value
        const book={title,author,data,image}
        await axios.post('http://localhost:9000/books',books)
        alert('Book added successfully')

    }

  return (
    <div>
        <h1>Add book</h1>
        <form onSubmit={handlebook}>
            Title: <input type="text" name="title" placeholder="Enter Book Title" required/>
            Author: <input type="text" name="author" placeholder="Enter Author Name" required/>
            Date: <input type="date" name="date" placeholder="Enter Book Data" required/>
            <input type="text" name="image" placeholder="Enter Image URL" required/>
            <button type='submit'>Add Book</button>
        </form>

    </div>
  )
}

export default AddBook