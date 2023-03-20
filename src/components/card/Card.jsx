import React from "react";
import styles from "./Card.module.css";

function Card({ hotel }) {
    const reservar = () =>{
      alert("Hotel serverdado")
    }
  return (
    <div className={styles.hotel}>
      <img src={hotel.photo} className={styles.img} alt={hotel.name} />
      <span className={styles.name}>{hotel.name}</span>
      <button onClick={reservar} >Reservar</button>
    </div>
  );
}

export default Card;
