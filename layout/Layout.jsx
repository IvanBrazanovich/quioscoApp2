import Head from "next/head";
import Script from "next/script";
import React, { useContext } from "react";
import Aside from "../componente/Aside";
import Modal from "../componente/Modal";
import { QuioscoContext } from "../context/QuioscoProvider";
import styles from "../styles/layout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pasos from "../componente/Pasos";

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
          <Pasos />
          {children}
        </section>
        <ToastContainer />
        {modalProducto?.nombre ? <Modal /> : null}
      </main>
    </>
  );
};

export default Layout;
