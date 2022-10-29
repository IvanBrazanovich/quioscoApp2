import React, { createContext, useEffect, useState } from "react";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [actual, setActual] = useState({});

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

  return (
    <QuioscoContext.Provider value={{ changeActual, categorias, actual }}>
      {children}
    </QuioscoContext.Provider>
  );
};

export default QuioscoProvider;

export { QuioscoContext };
