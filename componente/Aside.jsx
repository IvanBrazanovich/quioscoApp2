import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/aside.module.css";
import imgLogo from "../public/img/logo.svg";
import { QuioscoContext } from "../context/QuioscoProvider";
import { useRouter } from "next/router";

const Aside = () => {
  const { changeActual, categorias, actual } = useContext(QuioscoContext);
  const router = useRouter();
  return (
    <div className={styles.aside}>
      <div className={styles.aside__imgWrapper}>
        <Image
          height={100}
          width={400}
          alt="Imágen logotipo de la empresa"
          src={imgLogo}
        />
      </div>

      <div className={styles.aside__categoriasWrapper}>
        <ul className={styles.aside__list}>
          {categorias?.map((item, index) => {
            return (
              <li
                onClick={() => {
                  changeActual(item);
                  router.push("/");
                }}
                className={`${styles.list__categoria}  ${
                  actual.icono === item.icono
                    ? styles["list__categoria--active"]
                    : ""
                }`}
                key={item.id}
              >
                <div className={styles.categoria__imgWrapper}>
                  <Image
                    width={70}
                    height={70}
                    src={`/img/icono_${item.icono}.svg`}
                    alt="Imagen de categoria"
                  />
                </div>
                <p className={styles.list__name}>{item.nombre}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
