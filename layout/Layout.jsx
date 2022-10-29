import Head from "next/head";
import Script from "next/script";
import React, { useContext, useEffect, useState } from "react";
import Aside from "../componente/Aside";
import Modal from "../componente/Modal";
import { QuioscoContext } from "../context/QuioscoProvider";
import styles from "../styles/layout.module.css";

const Layout = ({ children, title = "" }) => {
  const { modalProducto } = useContext(QuioscoContext);

  return (
    <>
      <Head>
        <title>Quiosco - {title}</title>
        <meta
          name="description"
          content="Quiosco de comidas: hamburguesas, pizzas, dulces y salados. "
        />
      </Head>

      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></Script>

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

        {modalProducto?.nombre ? <Modal /> : null}
      </main>
    </>
  );
};

export default Layout;
