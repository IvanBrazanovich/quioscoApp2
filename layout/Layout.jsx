import Head from "next/head";
import React, { useEffect, useState } from "react";
import Aside from "../componente/Aside";
import styles from "../styles/layout.module.css";

const Layout = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>Quiosco - {title}</title>
        <meta
          name="description"
          content="Quiosco de comidas: hamburguesas, pizzas, dulces y salados. "
        />
      </Head>

      <main className={styles.layout}>
        <aside className={styles.layout__aside}>
          <Aside />
        </aside>
        <section className={`${styles.layout__sectionPrincipal}`}>
          <div className="listadoProductos__barra">
            <div className={styles.barra__textos}>
              <p>Menú</p>
              <p>Resúmen</p>
              <p>Total</p>
            </div>
            <div className={styles.barra__porcentaje}></div>
          </div>

          {children}
        </section>
      </main>
    </>
  );
};

export default Layout;
