import React from 'react'
import styles from './Alerta.module.css'

function Alerta() {
  return (
    <div className={styles.alerta}>
        <img src="./images/error.png" alt="" />
        <h1>Error al encontrar la busqueda solicitada.</h1>
    </div>
  )
}

export default Alerta