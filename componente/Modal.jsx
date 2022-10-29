import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";
import styles from "../styles/modal.module.css";

const Modal = () => {
  const { closeModal, agregarCarrito, modalProducto } =
    useContext(QuioscoContext);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    if (modalProducto.cantidad) {
      setCantidad(modalProducto.cantidad);
    }
  }, []);

  const { nombre, precio, imagen } = modalProducto;
  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__background}></div>
      <div className={styles.modal}>
        <div className={styles.listadoContainer__producto}>
          <div className={styles.producto__imgWrapper}>
            <Image
              alt="imágen de producto comida"
              fill
              src={`/img/${imagen}.jpg`}
            />
          </div>
          <div className="wrapper">
            <div className={styles.modal__closeModal}>
              <ion-icon onClick={closeModal} name="close-outline"></ion-icon>
            </div>
            <h2 className={styles.producto__nombre}>{nombre}</h2>
            <h3 className={styles.producto__precio}>$ {precio.toFixed(2)}</h3>

            <div className={styles.producto__editar}>
              <ion-icon
                style={{
                  cursor: "pointer",
                }}
                onClick={() => cantidad > 1 && setCantidad(cantidad - 1)}
                name="remove-circle-outline"
              ></ion-icon>
              <p>{cantidad}</p>
              <ion-icon
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setCantidad(cantidad + 1)}
                name="add-circle-outline"
              ></ion-icon>
            </div>
            <button
              onClick={() => agregarCarrito({ ...modalProducto, cantidad })}
              className={styles.producto__button}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
