import React from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={styles.div}>
      <div className={styles.divlogo}>
        <img className={styles.logo} src="../images/nhoteles.png" alt="" />
      </div>
      <div className={styles.caja}>
        <select name="language" id="language">
          <option value=""><FontAwesomeIcon icon={faGlobe} />Idioma</option>
          <option value="">English</option>
          <option value="">Español</option>
          <option value="">Français</option>
          <option value="">Português</option>
        </select>
        <span>IDIOMA</span>
        <ul>
          <li>Anunciar un hotel</li>
          <li>Ayuda</li>
          <li>Iniciar sesión</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
