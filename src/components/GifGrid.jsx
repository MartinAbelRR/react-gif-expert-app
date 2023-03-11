import { useState, useEffect } from "react";
import { useFetchGitfs } from "../hooks/useFetchGitfs";

import { GifItem } from "./GifItem";

// import { getGifs } from "../helpers/getGifs";


export const GifGrid = ( {category} ) => {
    
    const { images, isLoading } = useFetchGitfs( category );
    return (
    <>  
        <h3>{ category }</h3>        
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                    />
                ))
            }
        </div>
    </>
  )
}