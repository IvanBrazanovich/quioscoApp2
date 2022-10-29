import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [actual, setActual] = useState({});
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
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

    if (arrCarrito) {
      setModalProducto(arrCarrito);
    } else {
      setModalProducto(producto);
    }
  };

  const closeModal = () => {
    setModalProducto({});
  };
  const calcularTotal = () => {
    const tot = carrito.reduce(
      (total, item) => item.precio * item.cantidad + total,
      0
    );

    setTotal(tot);
  };

  const changeCarrito = (producto) => {
    const arrCarrito = carrito.some((item) => item.id === producto.id);

    if (arrCarrito) {
      const newArr = carrito.map((item) =>
        item.id === producto.id ? producto : item
      );

      setCarrito(newArr);
      toast.success("Se editó correctamente");
    } else {
      toast.success("Se agregó correctamente");
      setCarrito([...carrito, producto]);
    }

    calcularTotal();

    closeModal();
  };

  const eliminarCarrito = (id) => {
    const newArr = carrito.filter((item) => item.id !== id);

    setCarrito(newArr);
    calcularTotal();
    toast.success("Se eliminó correctamente");
  };

  return (
    <QuioscoContext.Provider
      value={{
        closeModal,
        changeCarrito,
        openModal,
        modalProducto,
        changeActual,
        categorias,
        actual,
        total,
        eliminarCarrito,
        carrito,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoProvider;

export { QuioscoContext };
