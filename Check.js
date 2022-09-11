import React from 'react'
import {useState} from 'react'
import Bt from './Bt';


function Check() {
    const [State,setState] = useState('false');
    const chs=()=>{
        setState(!State)
        console.log(State)
    }
  return (
    <div>
         <label>Please click here...!</label>
         <input type='checkbox' onClick={chs}></input>
         {
            State ? null : <Bt/>
         }
    </div>
  );
}

export default Check