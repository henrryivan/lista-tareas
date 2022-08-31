import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTarea from "./componentes/FormularioTarea";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  // Arreglo de objetos. Agregamos cada tarea(objeto) a una lista(array) de tareas
  const [tareas, cambiarTareas] = useState([]);

  return (
    <div className="contenedor">
      <Header />
      {/* Pasamos las tareas al componente FormularioTarea */}
      <FormularioTarea tareas={tareas} cambiarTareas={cambiarTareas} />
      {/* Pasamos las tareas al componente ListaTareas */}
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas} />
    </div>
  );
};

export default App;
