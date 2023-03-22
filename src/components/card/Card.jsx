import React from "react";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBed} from "@fortawesome/free-solid-svg-icons";

function Card({ hotel }) {
    const reservar = () =>{
      alert("Hotel serverdado")
    }
    const parserData = (data) =>{
      const date =  new Date(data)
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('es-CO', options)
    }
  return (
    <div className={styles.hotel}>
      <img src={hotel.photo} className={styles.img} alt={hotel.name} />
      <span className={styles.title} >{hotel.name}</span>
      <div><FontAwesomeIcon icon={faLocationDot}/> {hotel.country}</div>
      <span className={styles.text}>{hotel.description}</span>
      <span className={styles.date}>{ `Desde: ${parserData(hotel.availabilityFrom)}`}</span>
      <span className={styles.date}>{ `Hasta: ${parserData(hotel.availabilityTo)}`}</span>
      <div className={styles.price_rooms}>
        <span className={styles.rooms}> <FontAwesomeIcon icon={faBed}/>{` ${hotel.rooms} Habitaciones`} </span>
        <span className={styles.rooms}> {"$".repeat(hotel.price)}  </span>
      </div>
      <button className={styles.btn} onClick={reservar} >Reservar</button>
    </div>
  );
}

export default Card;
