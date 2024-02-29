import { useState } from "react";
import Card from "./Card";
import "../styles/Form.css";

export default function Form() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    instrumentoFav: "",
  });

  const [error, setError] = useState(false);
  const [mostrarCard, setMostrarCard] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setDatos((datosIniciales) => {
      return {
        ...datosIniciales,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !datos.nombre.trim().length >= 3 ||
      datos.apellido.length < 6
    ) {
      setError(true);
      return;
    }

    setError(false);
    setMostrarCard(true);
  }

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
          value={datos.nombre}
        />
        <label htmlFor="apellido">Apellido: </label>
        <input
          type="text"
          name="apellido"
          placeholder="Ingresa tu apellido"
          onChange={handleChange}
          value={datos.apellido}
        />
        <label htmlFor="instrumentoFav">Instrumento Musical Favorito: </label>
        <input
          type="text"
          name="instrumentoFav"
          placeholder="Ingresa tu Instrumento Musical favorito"
          onChange={handleChange}
          value={datos.instrumentoFav}
        />
        <button type="submit">Enviar</button>
        {error && (
          <p style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </p>
        )}
      </form>
      {mostrarCard && (
        <Card
          nombre={datos.nombre.trim()}
          apellido={datos.apellido}
          instrumentoFav={datos.instrumentoFav}
        />
      )}
    </div>
  );
}