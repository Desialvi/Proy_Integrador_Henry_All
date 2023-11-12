import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import  style  from './Detail.module.css';


const Detail = () => {
    const {id} = useParams();
    console.log(id)
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
            console.log(data)
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
  return (
    <div  >
        {character ? (
            <div className={style.Container}>
                <img 
                src= {character.image}
                style = {{ width:  '300px', height: '400px'}}
                />
                <div className={style.ContainerText}>
                <h1> {character.name}</h1>
                </div>
                <div className={style.ContainerText2}>
                <h2> {character.status}</h2>
                <h2> {character.species}</h2>
                <h2> {character.gender}</h2>
                <h2> {JSON.stringify(character.origin)}</h2>  
                </div>
                
            </div>
        ):(
            <h1>Loading data</h1>
        )}
     </div>
  )
}

export default Detail