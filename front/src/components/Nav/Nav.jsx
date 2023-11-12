import SearchBar from '../SearchBar/SearchBar';
import {Link} from 'react-router-dom';
import style from './Nav.module.css';

const Nav = (props) => {

    const {onSearch} = props;
    return (
    <div className={style.Links}>
        <Link className={style.inputNav} to={'/home'}>Home</Link>
        <Link className={style.inputNav} to= {'/About'}> About </Link>
        <SearchBar onSearch = {onSearch}/>

    </div>
  );
};

export default Nav
