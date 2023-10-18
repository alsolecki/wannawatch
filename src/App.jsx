import React, { useState, useEffect } from 'react'
import './App.css'
import SiteNavBar from './components/navBar/SiteNavBar.jsx'
import AddMovie from './components/AddMovie.jsx'
import Content from './components/Content.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import apiRequest from './components/apiRequest.jsx'

function App() {

  const API_URL = 'http://localhost:3500/movies';
  const [items, setItems] = useState([]);
  const [newMovie, setNewMovie] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('did not receive expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
      }, 2000)

    }, [])
    


  const addItem = async (title) => {
    //ternary statement to set the id value
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, title}
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result); 
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
        <Header
          title="WannaWatch"
          />

        <AddMovie 
          newMovie={newMovie}
          setNewMovie={setNewMovie}
          handleSubmit={handleSubmit}
        />
        <main>
          {isLoading && <p>Loading Items...</p>}
          {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
          {!fetchError && !isLoading && <Content
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />}
        </main>
        <Footer
          length={items.length} />
        
      </div>
    </>
  )
}

export default App
