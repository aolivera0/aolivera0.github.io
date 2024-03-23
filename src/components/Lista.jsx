import { data } from "../data/data";
import Card from "./Card";
import React, { useState } from "react";

export default function lista({ rows }) {
  const [busqueda, setBusqueda] = useState("");
  return (
    <div>
      <input
        autoComplete="off"
        className="w-full py-2 px-3 mb-8 text-black"
        type="text"
        name="buscador"
        id="buscador"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div>
       {rows.map((palabra)=>{
          if (
            palabra.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            palabra.significado.toLowerCase().includes(busqueda.toLowerCase())
          ) {
            return (
              <Card
                word={busqueda != ""? palabra.nombre.replace(busqueda, `<mark>${busqueda}</mark>`):palabra.nombre}
                meaning={busqueda != ""? palabra.significado.replace(busqueda, `<mark>${busqueda}</mark>`):palabra.significado}
                policy={palabra.nombre_politica}
                category={palabra.nombre_categoria}
                exception={palabra.exception}
              ></Card>
            );
          }
        }
       )}
      </div>
    </div>
  );
}
