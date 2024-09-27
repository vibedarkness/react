import { useState } from 'react';


 function Form() {
    const [firstname, setFirstname] = useState('omar thiombane');

    
    const handleChange=(e)=>{

        setFirstname(e.target.value)

    }


    const reset=()=>{
        setFirstname('')
    }

  return (
    <>
    <form action="">
    <input type="text" name="firstname" onChange={handleChange} value={firstname} />


    <button onClick={reset}>Effacer</button>
</form>
    </>
  )
}



export default Form




