import React, { useState, useEffect } from 'react'
import './App.css'

import SiteNavBar from './components/navBar/SiteNavBar.jsx'
import AddMovie from './components/AddMovie.jsx'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ErrorHandle from './components/ErrorHandle.jsx'
import SearchBar from './components/SearchBar.jsx'
import SearchBox from './components/SearchBox.jsx'
import SearchResultsList from './components/SearchResultsList.jsx'


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('movielist')) || []);
  const [newMovie, setNewMovie] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [results, setResults] = useState([]);

  //why are we using useEffect here? setting items to the local storage is an effect that needs attention when it's dependency is changed/triggered (items)
  useEffect(() => {
    localStorage.setItem('movielist', JSON.stringify(items));
  }, [items])

  const addItem = (title) => {
    setErrorMsg('');
    const id = title.replace(/\s/g, "").toLowerCase();
    //check for existing id 
    const filterResult = items.filter((item) => item.id === id)
    if (filterResult.length === 0) {
    const myNewItem = {id, title}
    const listItems = [...items, myNewItem];
    setItems(listItems);
    } else {
      handleError(filterResult[0].title);
    }
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

  const handleError = (title) => {
    setErrorMsg(`NOT ADDED: ${title} is already exists in the list`);
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
          
          {/* <SearchBox /> */}
          <SearchBar setResults={setResults}/>
          <SearchResultsList results={results}/>

          <ErrorHandle errorMsg={errorMsg} />
      
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
