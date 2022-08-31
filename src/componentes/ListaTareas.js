/* Componente que va contener la lista de tareas */

import React from "react";
import Tarea from "./Tarea";

// En el parámetro de la función obtenemos las tareas (array de objetos)
const ListaTareas = ({ tareas, cambiarTareas }) => {
  // Función que edita la tarea por medio de su id y reemplaza con un nuevo texto
  const editarTarea = (id, nuevoTexto) => {
    //Recorremos el arreglo para obtener cada tarea
    cambiarTareas(
      tareas.map((tarea) => {
        // Encontramos la tarea que se le dió click por medio de su id y finalmente cambiamos el texto.
        if (tarea.id === id) {
          // Comparamos el id de cada tarea con el id que recibimos como parámetro, si encontremos el id, entonces...
          return { ...tarea, texto: nuevoTexto }; // Cambiamos el texto
        }
        return tarea;
      })
    );
  };

  // Función que borra la tarea
  const borrarTarea = (id) => {
    // filter() itera sobre un array y en base a la condición retorna un nuevo arreglo.
    cambiarTareas(tareas.filter((tarea) => tarea.id !== id)); // Retornamos un nuevo array sin la tarea que coincide con el id. Así eliminamos la tarea que se le da click en la X
  };

  return (
    <ul className="lista-tareas">
      {/* Si hay una tarea o más, entonces Iteramos sobre la lista de tareas y sacamos cada tarea, en caso contrario mostramos un mensaje */}
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          return (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              editarTarea={editarTarea}
              borrarTarea={borrarTarea}
            />
          );
        })
      ) : (
        <div className="lista-tareas__mensaje">~ No hay tareas agregadas ~</div>
      )}
    </ul>
  );
};

export default ListaTareas;
