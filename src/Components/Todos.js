import React from 'react';
import { useState } from 'react';


const Todos = () => {
   const [add, setAdd] = useState('');
   const [allTodo, setAllTodo] = useState([]);
   const [edit,setEdit] = useState(undefined);
  
  const  handleOnchange = (e) => {
      setAdd(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (edit !== undefined) {
         const newEditedTodos = allTodo.map((item,index) => {
            if (index === edit) {
               return add;
            } else {
               return item;
            }
         })
         setAllTodo(newEditedTodos)
         setAdd(' ')
         setEdit(undefined)
      } else {
         if (add !== ' ' && add.length > 3) {
            const task = [...allTodo, add];
            setAllTodo(task)
         }  
         setAdd(' ');
      }
     
   }
  
   const handleDelete = (index) => {
      const newList = allTodo.filter((item,newindex) => newindex !== index);
      setAllTodo(newList);
   };
   
   const handleEdit = (index) => {
      setAdd(allTodo[index])
      setEdit(index)
   }
   return (
      <>
      <div>
         <form onSubmit={handleSubmit}>
               <h1>Enter Your Today's Plan</h1><br/>
               <input type="text" value={add} placeholder=' Your Task' onChange={handleOnchange}></input>{' '}
               <button className='submit-btn'>Submit</button>
         </form>
         </div><br/><br/><br/>
         <div className="todos">
         <label>Your To-Do's</label>
            <ul className='list'>
                     {allTodo.map((item,index) => {
                  return <li>{item}
                     <button className='edit-btn' onClick={()=>{handleDelete(index)}}>Delete</button>{' '}
                     <button className='edit-btn' onClick={()=>{handleEdit(index)}}>Edit</button>
                     </li>
               })}
               </ul> 
          
      </div> 
      </>
   )
}
export default Todos; 
