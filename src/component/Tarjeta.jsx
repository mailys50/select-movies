import style from "./Tarjeta.module.css";
export default function Tarjeta({ titulo }) {
  const urlImagen = "https://image.tmdb.org/t/p/w300" + titulo.poster_path;
  return (
    <li className={style.tarjeta}>
      <img
        width={230}
        height={345}
        className={style.imagen}
        src={urlImagen}
        alt={titulo.title}
      />
      <div className={style.title} >{titulo.title}</div>
    </li>
  );
}
