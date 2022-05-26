import React, {useEffect, useState} from "react";
import Articulo from "./articulos";
import {datos_articulos} from "./info_articulos";
import "./estilos-articulos.css";

export default function Contenedor() {
    //estados de la paginacion
    const [buttonnext, setbuttonnext] = useState(false);
    const [prebutton, setprebutton] = useState(true);
    //limites
    const limit=6;
    const [pageNumber, setPageNumber] = useState(1);
    const [startIndex,setstartIndex] = useState();
    const [endIndex,setendIndex] = useState();

    const [post, setPost] = useState([])
    const obtenerDatos = async () => {
        var url ='https://newsapi.org/v2/top-headlines?' +
        'country=co&' +
        'apiKey=661ad647db6d43e29c9c0c21ae9e0ac2';
        const res = await fetch(url);
        const noti = await res.json();
        //console.log(noti.articles);
        setPost(noti.articles);
        return noti.articles;
   }
   useEffect(()=>{
       obtenerDatos();

        setstartIndex((pageNumber-1)*limit)
        setendIndex(pageNumber*limit)
        console.log(startIndex)
        console.log(endIndex)

   },[pageNumber, startIndex, endIndex]);

   const Next = ()=>{
        if(pageNumber === (Math.floor((obtenerDatos.length + limit -1)/limit))){
            setbuttonnext(true)
        }else{
            setPageNumber(pageNumber+1)
            setprebutton(false)
        }
  }
  
  const Previous = () =>{
    if(pageNumber === 1){
      setprebutton(true)
    }else{
      setPageNumber(pageNumber-1)
      setbuttonnext(false)
    }
  }
    return(
        <>
        <div className="w3-row-padding">
            {
                post.slice(startIndex, endIndex).map((posts, index)=>{
                   return <Articulo key={index} articulos={posts}/>
                }) 
            }
             <div className="text-center">
                <button className="btn btn-primary" 
                    disabled={prebutton}  onClick={Previous}
                > Cargar menos </button>
                 <p>{ pageNumber}</p>
                 <button className="btn btn-primary" 
                    disabled={buttonnext} onClick={Next}
                > Cargar Más </button>
            </div>
        </div>

        </>
        
    );
} 