import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState(['League of Legends']);
    
    const  onAddCategory =(newCategory) =>{
      if (categories.includes(newCategory)) return;
       setCategories([ newCategory, ...categories ])
      console.log(newCategory)
    }
    
    
  return (
    <>   
      <h1>Buscador de Gifs de Olave</h1>
     
      <AddCategory 
      onNewCategory={ ( event )=> onAddCategory(event) }
      />

      {
          categories.map( ( category ) => (
            <GifGrid
              key = { category }
              category = { category }
              />
          ))
      }
    </>
    )
}

