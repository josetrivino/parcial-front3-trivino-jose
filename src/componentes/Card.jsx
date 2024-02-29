const Card = ({ nombre, apellido, instrumentoFav }) => {
    return (
      <div className="box">
        <h3>Hola {nombre} {apellido}</h3>
        <p>Tu Instrumento Musical favorito es: {instrumentoFav}</p>
      </div>
    );
  };
  
export default Card;