import styles from "./PeliculaDetails.module.css";
import dataDetail from "../dataDetailCard.json";
export default function PeliculaDetails() {
  const urlImagen = "https://image.tmdb.org/t/p/w300" + dataDetail.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.imagePelicula}`}
        src={urlImagen}
        alt={dataDetail.title}
      />
      <div className={`${styles.col} ${styles.details}`}>
        <p className={styles.first}>
          <strong>Title: {dataDetail.title}</strong>
        </p>
        <p>
          <strong>Genres:</strong>
          {""}
          {dataDetail.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descripción: {dataDetail.overview}</strong>
        </p>
      </div>
    </div>
  );
}
