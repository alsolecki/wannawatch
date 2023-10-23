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

  //why are we using useEffect here? setting items to the local storage is an effect that needs attention when it's dependency is changed/triggered (items)
  useEffect(() => {
    localStorage.setItem('movielist', JSON.stringify(items));
  }, [items])
  
  const createNewId = () => {
    const arrayOfIds = [0];
    for (let i = 0; i < items.length; i++){
      arrayOfIds.push(items[i].id);
    }; 
    return Math.max(...arrayOfIds) + 1;
  }  

  const addItem = (title) => {
    const id = createNewId();
    const myNewItem = {id, title}
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

      {/* {console.log(items)} */}

        <div className="container">
          <Header title="WannaWatch" />
          <AddMovie 
            newMovie={newMovie}
            setNewMovie={setNewMovie}
            handleSubmit={handleSubmit}
          />
          {/* <div className="error-msg">
            <p>ERROR: Movie title is already on the list</p>
          </div> */}

          <Content
            items={items}
            handleDelete={handleDelete}
            setItems={setItems}
          />

          <Footer length={items.length} />
        </div>
    </>
  )

}

export default App
