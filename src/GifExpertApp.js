import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball AF'])
 
    // const handleAdd = () => {
    //   // setCategories( [...categories, 'XXX']);
    //   setCategories( categories => [...categories,'Hunter Hunter']);
    // }

    return (
        <>
          <h2>GifExpertApp</h2> 
          <AddCategory setCategories={ setCategories }/>
          <hr/> 
          <ol>
            {
              categories.map(  category =>  ( 
              <GifGrid 
                key = { category }
                category = { category } 
              />
              ))
            }
          </ol>

        </>
    )
}



