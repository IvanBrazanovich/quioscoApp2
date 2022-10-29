import React, { useContext } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";
import { transformCurrency } from "../helper/helpers";
import Layout from "../layout/Layout";
import styles from "../styles/total.module.css";

const Total = () => {
  const { total } = useContext(QuioscoContext);

  return (
    <Layout title="Confirma Pedido">
      <div className={styles.total}>
        <h3>Total y confirmar pedido</h3>
        <p>Confirma tu pedido a continuación</p>

        <form>
          <label className={styles.total__label} htmlFor="nombre">
            Nombre
          </label>
          <input
            required
            type="text"
            name="nombre"
            id="nombre"
            className={styles.total__input}
          />
        </form>

        <p style={{ fontSize: "1.2rem", fontWeight: "900" }}>
          Total a pagar: {transformCurrency(total)}
        </p>

        <button className={styles.form__button}>Confirmar pedido</button>
      </div>
    </Layout>
  );
};

export default Total;
