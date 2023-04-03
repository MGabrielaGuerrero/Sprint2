import React from "react";
import styles from "./Cards.module.css";
import Card from "../card/Card";

function Cards({ hotelsNew, setRooms}) {
  return (
    <main>
      <h1 className={styles.titulo}>Hoteles</h1>
      <div className={styles.hotels}>
        {hotelsNew.map((hotel) => (
          <Card key={hotel.slug}
           hotel={hotel} 
           setRooms={setRooms} />
        ))}
      </div>
    </main>
  );
}

export default Cards;
