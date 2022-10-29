import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/layout.module.css";

const Pasos = () => {
  const router = useRouter();

  const percentaje = () => {
    let number;
    switch (router.pathname) {
      case "/":
        number = 12;
        break;

      case "/resumen":
        number = 50;
        break;
      case "/total":
        number = 90;
        break;

      default:
        break;
    }

    return number;
  };

  return (
    <div className="listadoProductos__barra">
      <div className={styles.barra__textos}>
        <Link className={styles.barra__pasosLink} href="/">
          Menú
        </Link>
        <Link className={styles.barra__pasosLink} href="/resumen">
          Resúmen
        </Link>
        <Link className={styles.barra__pasosLink} href="/total">
          Total
        </Link>
      </div>
      <div className={styles.barra__porcentaje}>
        <div
          style={{
            width: `${percentaje()}%`,
          }}
          className={styles.barra__porcentajeFull}
        ></div>
      </div>
    </div>
  );
};

export default Pasos;
