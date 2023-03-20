import React from "react";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Filter() {
  return (
    <div className={styles.div}>
      <h1 className={styles.titulo}>Filtros</h1>
      <button className={styles.btnLimpiar} > <FontAwesomeIcon icon={faTrash}/>Limpiar</button>
    </div>
  );
}

export default Filter;
