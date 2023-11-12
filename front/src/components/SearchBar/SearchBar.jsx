import style from './SearchBar.module.css';
import { useState } from 'react';
const SearchBar = (props) => {
  const {onSearch} = props
  const [id, setId] = useState('');
  const handleChange = (event) => {
    
    setId(event.target.value);
  };
  return (
    <div className={style.searchBar}>
      <div className={style.ContainInput}>
        <input 
        onChange={handleChange} 
        placeholder='id' 
        className={style.inputNav} 
        type='search'
        value= {id}        />
        <button className={style.btnsearch} onClick={() => onSearch(id)}>
          Agregar
        </button> 
      </div>
       
    </div>
  );
};

export default SearchBar;
