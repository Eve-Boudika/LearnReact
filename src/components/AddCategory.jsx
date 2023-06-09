import React, { useState } from 'react';


export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = (event) => {
        setinputValue( event.target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( inputValue.trim().lenght <= 1) return;

        setCategories ( categories => [ inputVelue, ...categories]);
        setinputValue('');
    }

    return (
    <form onSubmit ={ onSubmit }>
        <input
            type='text'
            placeholder='Buscar gifs'
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
    )
}
