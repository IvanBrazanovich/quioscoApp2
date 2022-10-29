import Head from "next/head";
import React, { useContext } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";
import Layout from "../layout/Layout";
import styles from "../styles/index.module.css";
import Image from "next/image";

export default function Home() {
  const {
    actual: { icono, productos, nombre },
  } = useContext(QuioscoContext);

  return (
    <Layout title="Elige tus comidas">
      <Head>
        <meta name="description" content="Quiosco de comida" />
      </Head>

      <main className={styles.listadoProductos}>
        <h3 className={styles.listadoProductos__h3}>{nombre}</h3>

        <div className={styles.listadoProductos__listadoContainer}>
          {productos?.map((producto) => {
            return (
              <div
                key={producto.id}
                className={styles.listadoContainer__producto}
              >
                <div className={styles.producto__imgWrapper}>
                  <Image
                    alt="imágen de producto comida"
                    fill
                    src={`/img/${producto.imagen}.jpg`}
                  />
                </div>
                <h2 className={styles.producto__nombre}>{producto.nombre}</h2>
                <h3 className={styles.producto__precio}>
                  $ {producto.precio.toFixed(2)}
                </h3>
                <button className={styles.producto__button}>Agregar</button>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
