
import { PropTypes } from 'prop-types';


// Se pueden expresar { } expresiones, arrays, y funciones no async. Mo se pueden expresar objetos
//Solo si se pasan por json

const miNombre = 'Evelyn'
const cuentita = () => {
    return 2 + 2;
}

export const HelloWorldApp = ({ titulo, subtitulo }) => {

    return ( 
        <>
            <h1>{ titulo }</h1>
            <h1>{ subtitulo }</h1>
            <h3>Hola Mundo, soy { miNombre }!!!!</h3>
            <h2>Soy yo, Mickey { cuentita() } </h2>
            <p>Un texto random p</p>
        </>
    )
}

HelloWorldApp.propTypes = {

}