import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setcategories] = useState([ 'Rick y Morty', 'MR Robot' ]);

    const onAddCategory = () => {
        setcategories(['Breaking Bad',...categories ]);
      }
   

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory />

        <Button variant="contained" onClick={ onAddCategory }>Agregar</Button>

        <ol>
            {
                categories.map( category => {
                return <li key={ category }>{ category }</li>
                })
            
            }

        </ol>

    </>
  )
}
