import Image from "next/image";
import React, { useContext } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";
import { transformCurrency } from "../helper/helpers";
import Layout from "../layout/layout";
import styles from "../styles/resumen.module.css";
const Resumen = () => {
  const { carrito, eliminarCarrito, openModal } = useContext(QuioscoContext);

  return (
    <Layout title="Revisa tu pedido">
      <div className="resumen">
        <h2>Resúmen</h2>

        <p>Revisa tu pedido</p>

        {carrito?.map((item) => {
          const { cantidad, imagen, precio, nombre, id } = item;
          return (
            <div key={id} className={styles.listadoContainer__producto}>
              <div className={styles.producto__imgWrapper}>
                <Image
                  alt="imágen de producto comida"
                  fill
                  src={`/img/${imagen}.jpg`}
                />
              </div>
              <div className={styles.producto__info}>
                <h2 className={styles.producto__nombre}>{nombre}</h2>
                <p className={styles.producto__cantidad}>
                  cantidad: {cantidad}
                </p>
                <h3 className={styles.producto__precio}>
                  Precio: $ {precio.toFixed(2)}
                </h3>

                <p className={styles.producto__cantidad}>
                  Subtotal: {transformCurrency(precio * cantidad)}
                </p>
              </div>

              <div className={styles.producto__buttons}>
                <button
                  type="editar"
                  onClick={() => openModal(item)}
                  class={styles.buttons__button}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                  <p>Editar</p>{" "}
                </button>
                <button
                  onClick={() => eliminarCarrito(id)}
                  type="eliminar"
                  class={styles.buttons__button}
                >
                  <ion-icon name="trash-outline"></ion-icon>
                  <p>Eliminar</p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default Resumen;
