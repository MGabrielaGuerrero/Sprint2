import React from "react";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Filter({dateFrom, dateTo, setDateFrom, setDateTo}) {

  const dateFromFilter = (e)=>{
    setDateFrom(e.target.value)
  }

  const dateToFilter = (e)=>{
    setDateTo(e.target.value)
  }

  const clear = () =>{
    setDateFrom("")
    setDateTo("")
  }

  return (
    <div className={styles.div}>
      <div className={styles.contenedor}>
        <div>
          <input value={dateFrom} type="date" name="" id="" onChange={dateFromFilter} />
          <span>Fecha desde</span>
        </div>
        <div>
          <input value={dateTo} type="date" name="" id="" onChange={dateToFilter} />
          <span>Fecha hasta</span>
        </div>
        <div>
          <select name="country" id="">
            <option value="todos">Todos</option>
            <option value="argentina">Argentina</option>
            <option value="brasil">Brasil</option>
            <option value="chile">Chile</option>
            <option value="uruguay">Uruguay</option>
          </select>
          <span>Pais</span>
        </div>
        <div>
          <select name="tamano" id="">
            <option value="todos">Todos</option>
            <option value="grande">Grande</option>
            <option value="mediano">Mediano</option>
            <option value="pequeño">pequeño</option>
          </select>
          <span>Tamaño</span>
        </div>
        <div>
          <select name="precio" id="">
            <option value="todos">Todos</option>
            <option value="promocion">$</option>
            <option value="economico">$$</option>
            <option value="clase">$$$</option>
            <option value="lujoso">$$$$</option>
          </select>
          <span>Precio</span>
        </div>
        <button className={styles.btnLimpiar}  onClick= {clear}> <FontAwesomeIcon icon={faTrash} />Limpiar</button>
      </div>
    </div>
  );
}

export default Filter;
