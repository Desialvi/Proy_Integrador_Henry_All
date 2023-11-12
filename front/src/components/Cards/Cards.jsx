import Card from "../Card/Card";
import style from './Cards.module.css'
const Cards = (props) => {
  const {characters, onClose, onLike, favs} = props;
  return (
    <>
      <div className= {style.Container}>
        {characters.map((char) => {
        return (
          <Card 
            Key= {char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
            onLike={onLike}
            favs={favs}

          />
        )
      })

      } </div>
    </>
  );
};

export default Cards;
