/* Componente que muestra una tarea en específica */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, editarTarea, borrarTarea }) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false); // Estado para saber si la tarea se está editando o no, si es true muestra el formulario y oculta el texto, si es false solo muestra el texto
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto); // Estado para obtener el valor de cada tarea y pasarlo al formulario de edición

  // Función que se ejecuta cuando presionamos el botón de Actualizar tarea
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que se recarge la página cuando actualizamos el formulario
    editarTarea(tarea.id, nuevaTarea); // editarTarea() recibe como argumento la tarea que queremos editar y el nuevo texto que tendrá la tarea
    cambiarEditandoTarea(false); // Cambiamos el valor a falso, así ocultamos el formulario y solo mostramos el texto
  };

  return (
    <li className="lista-tareas__tarea">
      {/* Si se da click en el ícono de editar, entonces muestra el formulario para editar la información, caso contrario solo muestra texto*/}
      <div className="lista-tareas__texto">
        {
          /* Si editandoTarea es true, entonces muestra el formulario */
          editandoTarea ? (
            <form
              action=""
              className="formulario-editar-tarea"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="formulario-editar-tarea__input"
                value={nuevaTarea} // Obtenemos el valor de la tarea por medio del estado nuevaTarea
                onChange={(e) => cambiarNuevaTarea(e.target.value)} //Obtenemos el valor que escribimos en el input
              />
              <button type="submit" className="formulario-editar-tarea__btn">
                Actualizar
              </button>
            </form>
          ) : (
            tarea.texto
          )
        }
      </div>

      {/* Opciones de la tarea: editar y eliminar */}
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          /* Cuando se da click al ícono de editar, el valor de editandoTarea cambia a su contrario, si es true cambia a false y viceversa */
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
