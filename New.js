import React from 'react'
import './td.css'
import {useState} from 'react'
//import { keyboard } from '@testing-library/user-event/dist/keyboard';

function New(){
    const [itm,itmchange] = useState('');
    const [State,setState]=useState([]);
    const change=()=>{
      setState([...State,{ id: Date.now(), text: itm}])

    }
    const ar=(e)=>{
   
        itmchange(e.target.value)
       // console.log(itm)
    }
      //console.log(itm)
      //console.log(State)
      
     const rem=(obj)=>{
        const list = [...State]
       if(obj.id==list.id)
       return 
     }
    return(
        <div className='t'>
            <h1>Todo List</h1>
            <div className='sub'>
                 <label>Enter the items</label>&nbsp;
                 <input type='text' value={itm}  placeholder="enter the items" onChange={ar}></input><br/>
                 <button onClick={change}>Add</button>
                 {/* <button onClick={del}>delete</button> --> */}
                 {
                    State.map((obj,index)=>{
                        return(
                            <div >
                             
                                <p>idex : {index}</p>                          
                                 <p>ob :{obj.id}</p>
                               <p>items : {obj.text}</p>
                               <button   onClick={rem(obj)}  >
                                del</button>

                        </div>
                        )
                    })
                 }
                
                 

                 
            </div>
        </div>
    )

}

export default New