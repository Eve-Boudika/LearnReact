import { useState } from 'react'
import { PropTypes } from 'prop-types';
import Button from '@mui/material/Button';


export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState ( value )

    const contarmas = () => { 
      setCounter( counter + 1 )
      
    }

    const contarmenos = () => { 
      setCounter( counter - 1 )
      
    }

    const reset = () => { 
      setCounter( value )
      
    }


  return (
    <>
    <div>CounterApp</div>
    <h2> { counter } </h2>


    <Button onClick={ contarmas }  variant="contained" key="counterButton"> +1 </Button>
    <Button onClick={ contarmenos }  variant="contained" key="counterButton"> -1 </Button>
    <Button onClick={ reset } variant="contained" key="counterButton" > Reset </Button>
    </>
  );
}

CounterApp.propTypes = { 
    value: PropTypes.number
}
