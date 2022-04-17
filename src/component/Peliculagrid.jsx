import { Fragment } from "react";
import data from "../data.json";
import Tarjeta from "./Tarjeta";
import styles from "./Peliculagrid.module.css"
function Peliculagrid() {
  return (
    <Fragment>
      <ul className={styles.peliculagrid}>
        {
           data.map((titulo) => (
           <Tarjeta   key={titulo.id} titulo={titulo} />
            ))
        }
      </ul>
  
    </Fragment>
     
  );
}

export default Peliculagrid;
