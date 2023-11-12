import "./App.css";
//import Card from "./components/Card/Card";
import Nav from "./components/Nav/Nav";
import { useState } from 'react';
//import SearchBar from "./components/SearchBar/SearchBar";
import Cards from "./components/Cards/Cards";
import axios from 'axios';
import { Route, Routes, useLocation, Navigate, useNavigate  } from 'react-router-dom';
import  About  from './components/About/About';
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import PATHROUTES from "./helpers/PathRoutes";

//import characters from "./data.js";

function App() {
  const [characters, setCharacters ] = useState([]);
  const {pathname} = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); 
  const [favs, setFavs] = useState([])
  
  const onSearch = (id) =>{
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    })
  }
  
  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id)
  
      }))}

  const onLike = (id) => {
   setFavs([...favs, id]) 
  }
  
  const handleLogin = (email, password) => {
    console.log("LOGIN")
    if (email === 'desialvi@gmail.com' && password === '12345') {
      console.log("HOLA")
      setLoggedIn(true);
      navigate(PATHROUTES.HOME);
    }
  };


  return (
    <>
      
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route 
        exact
          path={PATHROUTES.LOGIN} 
          element={<Form onLogin={handleLogin} />}
        />
        <Route 
        exact
          path= {PATHROUTES.HOME} 
          element= {
            loggedIn ? (
            <Cards favs= {favs}  characters={characters} onClose = {onClose} onLike= {onLike} /> 

            ) : (
              <Navigate to={PATHROUTES.LOGIN} />
            )}
        />
        <Route 
          path= {PATHROUTES.ABOUT}
          element= {<About />}
        />
        <Route 
          path= {PATHROUTES.DETAIL}
          element= {<Detail />}
        />
   

      </Routes>
      {/* Al componente SearchBar le pasamos por la prop "onSearch" una función */}
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

      {/* Al componente Cards le pasamos por la prop "characters" el array de personajes que importamos más arriba */}
      

      {/* Al componente Card le pasamos las props que corresponden a las propiedades de un personaje y una función "onClose" */}
      
    </>
  );
}

export default App;
