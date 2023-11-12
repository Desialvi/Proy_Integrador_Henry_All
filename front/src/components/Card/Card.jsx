// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres
import styles from "./Card.module.css";
import {Link} from 'react-router-dom';
const Card = (props) => {
  const {id, name, status, species, gender, origin, image, onClose, onLike, favs} = props;

  return (
    <div className={styles.Container}>
       {/* {console.log(props)} */}
       <div className={styles.header_card}>
        <div className={styles.ContainerButton}> 
          <button className={styles.btn} onClick={() => onClose(id)}>X</button>
          <button className={styles.btnfav} onClick={() => onLike(id)}>{favs.includes(id) ? '❤️' : '🤍'}</button>
          {/* <span> {favs.some((favsid ) => favsid === id) ? "Me Gusta" : "No Me gusta"};
          </span> */}
                  



        </div>
        
       </div>

       <img src={image} alt='' />

       <div className={styles.ContainerText}> 
          <div className={styles.name}>
            <Link 
              to= {`/detail/${id}`}
              style={{ TextDecoration: 'none', color: 'inherit'}}>
            <h2>{name}</h2>
            </Link>
          </div>
          
          {/* <h2>{status}</h2> */}
          <h2>Especie: {species}</h2>
          {/* <h2>{gender}</h2> */}
          <h2>Origen: {origin}</h2>
        </div>
          
    </div>
  );
};

export default Card;
