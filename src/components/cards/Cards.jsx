import React from "react";
import styles from "./Cards.module.css";
import Card from "../card/Card";

function Cards({ hotelsData }) {
  return (
    <main>
      <h1 className={styles.titulo}>Hoteles</h1>
      <div className={styles.hotels}>
        {hotelsData.map((hotel) => (
          <Card key={hotel.slug} hotel={hotel} />
        ))}
      </div>
    </main>
  );
}

export default Cards;
