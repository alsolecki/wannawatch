import React, { useState, useEffect } from 'react'
import './App.css'

import SiteNavBar from './components/navBar/SiteNavBar.jsx'
import AddMovie from './components/AddMovie.jsx'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('movielist')) || []);
  const [newMovie, setNewMovie] = useState('');

  useEffect(() => {
    localStorage.setItem('movielist', JSON.stringify(items));
  }, [items])
    
  const addItem = (title) => {
    //ternary statement to set the id value
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, title}
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMovie) return;
    addItem(newMovie);
    setNewMovie('');
  }

  return (
    <>
      <SiteNavBar />

      <div className="container">
        <Header title="WannaWatch" />

        <AddMovie 
          newMovie={newMovie}
          setNewMovie={setNewMovie}
          handleSubmit={handleSubmit}
        />

        <Content
          items={items}
          handleDelete={handleDelete}
        />
          
        <Footer length={items.length} />
      </div>
    </>
  )

}

export default App
