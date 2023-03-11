
// YA NO ES NECESARIO IMPORTAR REACT DESPUES DE LA
// VERSION 17 DE RECT
// import React from 'react'

import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = ( newCategory ) => {
        
        if( categories.includes( newCategory ) ) return;

        // categories.push(newCategory);
        setCategories( cat => [ newCategory ,...cat ]);
        // setCategories( cat => [...cat, 'Valorant'] );
    }

    return (
        <>        
        <h1>GifExpertApp</h1>
        
        <AddCategory             
            onNewCategory = { value => onAddCategory(value) }
        />
        
        
        { 
        categories.map( ( category ) => (
                    <GifGrid 
                        key= { category } 
                        category= { category }/>
                )) 
        } 
    
        </>
    )
}