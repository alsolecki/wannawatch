import React, { useState, useEffect } from 'react'
import './App.css'

import SiteNavBar from './components/navBar/SiteNavBar.jsx'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ErrorHandle from './components/ErrorHandle.jsx'
import SearchBar from './components/SearchBar.jsx'
import SearchResultsList from './components/SearchResultsList.jsx'
import ConfirmationHandle from './components/ConfirmationHandle.jsx'

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('movielist')) || []);

  const [errorMsg, setErrorMsg] = useState('');
  const [confirmationMsg, setConfirmationMsg] = useState('');
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

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
      const myNewItem = { id, title }
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
    // e.preventDefault();
    console.log(e);
    addItem(e);
    setInput('');
    setResults([]);
    handleConfirmation(e);
  }

  const handleResultSelection = (e) => {
    setInput(e);
  }

  const handleError = (title) => {
    setErrorMsg(`NOT ADDED: ${title} already exists in your list`);
    setTimeout(() => {
      setErrorMsg('');
    }, 2500);
  }

  const handleConfirmation = (title) => {
    if (!errorMsg.length > 0) {
      return
    } else {
      setConfirmationMsg(`${title} has been added to your list!`);
      setTimeout(() => {
        setConfirmationMsg('');
      }, 1500);
    }

  }

  return (
    <>
      <SiteNavBar />

      <div className="container">
        <Header title="WannaWatch" />

        <SearchBar
          setResults={setResults}
          handleSubmit={handleSubmit}
          results={results}
          input={input}
          setInput={setInput}
        />
        <SearchResultsList
          results={results}
          handleResultSelection={handleResultSelection}
        />

        <ErrorHandle
          errorMsg={errorMsg} />

        <ConfirmationHandle
          confirmationMsg={confirmationMsg}
        />

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
