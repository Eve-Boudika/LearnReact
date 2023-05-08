import React, { useState } from 'react';


export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = () => {
        setinputValue('Hola Mundo')
    }

    return (
    <input
        type='text'
        placeholder='Buscar gifs'
        value={ inputValue }
        onChange={ onInputChange }
    
    />
    )
}
