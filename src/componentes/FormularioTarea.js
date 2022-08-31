import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

/* Por medio de desestructuración sacamos/extraemos las tareas que están en App.js */
const FormularioTarea = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState("");

  /* Obtenemos el valor del input */
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Evitamos que la página se recargue cada vez que presionamos el botón

    /* Mediante la función cambiarTareas(), podemos modificar el estado de las tareas.
       El nuevo estado de tareas va seguir siendo un arreglo. El array va contener todos las tareas que teníamos anteriormente y después agregamos una nueva tarea como objeto.
    */

    // Validamos que almenos se escriba un caracter en el formulario
    if (inputTarea.trim().length > 0) {
      cambiarTareas([
        ...tareas,
        {
          id: uuidv4(),
          texto: inputTarea,
          completada: false,
        },
      ]);
    }

    cambiarInputTarea(""); // Limpiamos el input luego de agregar la tarea
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
        autoFocus
      />

      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default FormularioTarea;
