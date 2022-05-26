import React from "react";
import img1 from "./../../imagenes/imagen1.jpg";

export default function Articulo({articulos}) {
    //console.log(articulos);
    let fecha = articulos.publishedAt;
    let titulo = articulos.title;
    let des = articulos.description;
    return(
        <div className="w3-third w3-container w3-margin-bottom">
            <img src={articulos.urlToImage} alt="Norway" style={{width:"300px",height:"200px"}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
            <h2 class="titulo-articulo"> { titulo.slice(0, 50)+ "..." } </h2> 
              <p class="fecha-articulo">Fecha: { fecha.slice(0,10) } </p> 
               <p class="des-articulo"> { des.slice(0,100)+ "..." } </p> 
            </div>
        </div>
    );
} 