import React, { createContext, useEffect, useState } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [actual, setActual] = useState({});
  const [carrito, setCarrito] = useState([]);
  const [modalProducto, setModalProducto] = useState({});

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/categorias");
        const responseJson = await response.json();

        setCategorias(responseJson.categorias);
        setActual(responseJson.categorias[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategorias();
  }, []);

  const changeActual = (categoriaItem) => {
    setActual(categoriaItem);
  };

  const openModal = (producto) => {
    const arrCarrito = carrito.find((item) => item.id === producto.id);
    console.log(arrCarrito);

    if (arrCarrito) {
      setModalProducto(arrCarrito);
    } else {
      setModalProducto(producto);
    }
  };

  const closeModal = () => {
    setModalProducto({});
  };

  const agregarCarrito = (producto) => {
    const arrCarrito = carrito.some((item) => item.id === producto.id);

    if (arrCarrito) {
      const newArr = carrito.map((item) =>
        item.id === producto.id ? producto : item
      );

      setCarrito(newArr);
    } else {
      setCarrito([...carrito, producto]);
    }
    closeModal();
  };

  return (
    <QuioscoContext.Provider
      value={{
        closeModal,
        agregarCarrito,
        openModal,
        modalProducto,
        changeActual,
        categorias,
        actual,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoProvider;

export { QuioscoContext };
