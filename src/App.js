import React from "react";
import Menu from "./componentes/menu/Menu";
import Cabecera from "./componentes/cabecera/cabecera";
import Pie from "./componentes/piedepagina/pie";
import Contacto from "./componentes/contacto/contacto";
import Contenedor from "./componentes/contenedor/contenedor";


function Principal() {
  return (
    <>
      <Menu/>
      <div className="w3-main" style={{marginLeft:"300px"}}>
        <Cabecera/>
        <Contenedor/>
        <Contacto/>
        <Pie/>
      </div>
    </>

  );
}

export default Principal;
