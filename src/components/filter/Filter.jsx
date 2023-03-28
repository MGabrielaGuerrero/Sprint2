import React from "react";
import styles from "./Filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function Filter({ dateFrom, dateTo, sizeHotels, countryHotel, priceHotel, setDateFrom, setDateTo, setSizeHotels, setCountryHotel, setPriceHotel}) {


  const dateFromFilter = (e) => {
    setDateFrom(e.target.value)
  }

  const dateToFilter = (e) => {
    setDateTo(e.target.value)
  }

  const sizeFilter = (e) => {
    setSizeHotels(e.target.value);

  }
  const countryFilter = (e) => {
    setCountryHotel(e.target.value);

  }
  const priceFilter = (e) =>{
    setPriceHotel(e.target.value);
  }
  const clear = () => {
    setDateFrom("")
    setDateTo("")
    
    setCountryHotel("todos")
    setPriceHotel("todos")
    setSizeHotels("todos")
  }

  
  return (
    <div className={styles.div}>
      <div className={styles.contenedor}>
        <div>
          <input value={dateFrom} type="date" name="" id="" onChange={dateFromFilter} />
          <span>Fecha desde</span>
        </div>
        <div>
          <input value={dateTo} min={dateFrom} type="date" name="" id="" onChange={dateToFilter} />
          <span>Fecha hasta</span>
        </div>
        <div>
          <select value={countryHotel} name="countryselect" id="" onChange={countryFilter}>
            <option value="todos">Todos</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>
          <span>Pais</span>
        </div>
        <div>
          <select value={sizeHotels} name="tamano" id="" onChange={sizeFilter}>
            <option value="todos">Todos</option>
            <option value="grande">Grande</option>
            <option value="mediano">Mediano</option>
            <option value="pequeño">Pequeño</option>
          </select>
          <span>Tamaño</span>
        </div>
        <div>
          <select value={priceHotel} name="precio" id="" onChange={priceFilter}>
            <option value="todos">Todos</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
          <span>Precio</span>
        </div>
        <button className={styles.btnLimpiar} onClick={clear}> <FontAwesomeIcon icon={faTrash} />Limpiar</button>
      </div>
    </div>
  );
}

export default Filter;
