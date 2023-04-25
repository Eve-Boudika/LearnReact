import { PropTypes } from 'prop-types';
// import { Button } from '@mui/material';
import Button from '@mui/material/Button';


export const CounterApp = ({value}) => {
    const handleadd = () => { 
        console.log('+1') }
  return (
    <>
    <div>CounterApp</div>
    <h2> { value } </h2>


    <Button onClick={ handleadd }  variant="contained" key="counterButton">
      +1
    </Button>
    </>
  );
}

CounterApp.propTypes = { 
    value: PropTypes.number
}
