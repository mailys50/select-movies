import { Fragment } from "react";
// import data from "../data.json";
import Tarjeta from "./Tarjeta";
import styles from "./Peliculagrid.module.css";
import { useEffect, useState } from "react";
function PeliculaGridApi() {
  // let data1 =[];
  // eslint-disable-next-line no-unused-vars
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
      .then((dataMovies) => {
        setdata(dataMovies.results);
      },[]);
  });
  return (
    <Fragment>
      <ul className={styles.peliculagrid}>
        {data.map((titulo) => (
          <Tarjeta key={titulo.id} titulo={titulo} />
        ))}
      </ul>
    </Fragment>
  );
}

export default PeliculaGridApi;
