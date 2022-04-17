import React from 'react';
import PeliculaDetails from './pages/PeliculaDetails';
import { BrowserRouter, Link, Route,Routes } from "react-router-dom";
import styles from "./App.module.css"
import HomePelicula from './pages/HomePelicula';

function App() {
  return (
    <BrowserRouter>
    <Routes>
 
      <Route path="/" element={ 
        <Link to= "/home"><h1 className={styles.title}>Películas</h1></Link>
    
      }/> 
    
      <Route path="/home" element={ <HomePelicula />}/> 
      <Route path="/pelicula" element={ <PeliculaDetails />}/> 

    
    </Routes>
  </BrowserRouter>
  
      
   
  )
}

export default App


