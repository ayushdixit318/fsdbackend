import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddBook from './components/AddBook'
import Update from './components/Update'
import DeleteBook from './components/DeleteBook'
import ViewBook from './components/ViewBook'
import SearchBook from './components/SearchBook'
import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/add">Add Book</Link></li>
            <li><Link to="/view">View Book</Link></li>
            <li><Link to="/search">Search Book</Link></li>
            <li><Link to="/update">Update Book</Link></li>
            <li><Link to="/delete">Delete Book</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<DeleteBook />} />
          <Route path="/view" element={<ViewBook />} />
          <Route path="/search" element={<SearchBook />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App