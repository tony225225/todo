//import './App.css';
import './style.css';
import {useState} from 'react';
import Counter from './Counter';
import Employee from './Employee';
//import Todolist from './Todolist'

function App() {
  const [count,setcount] = useState(0);
  const addcount=()=>{
    setcount(count+1)
    console.log(count)
  }
  const removecount=()=>{
    setcount(count-1)
    console.log(count)
  }
  let emp =[{name:'tony',age:23},{name:'manu',age:20},{name:'sree',age:13}]
 return(
 <div>
   <input type='checkbox'>hi</input>
    <button type='submit' onClick={addcount}>add</button>
    <button type='submit' onClick={removecount}>delete</button>
   <Counter count={count}/>
   {
    emp.map((ob)=>{
      return(
        <Employee name = {ob.name} age ={ob.age} />
      )
    })
   }
  </div>
 
 );
}

export default App;
