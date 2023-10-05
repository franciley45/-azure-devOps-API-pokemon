import React, { createContext, useState } from "react";

// Criando um contexto
export const CounterContext = createContext();

// Componente que provê o tema para os componentes filhos
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
