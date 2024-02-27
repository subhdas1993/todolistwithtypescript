import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos";

function AddToDoList() {
    const [todo,setTodo] = useState("");
    const {handleAddToDo} = useTodos();

    const handeFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddToDo(todo);
        setTodo("");
    }

    return (
    <>
        <form onSubmit={handeFormSubmit} className="text-[1.6vmax] flex justify-evenly items-center font-[Merriweather]">
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className="bg-transparent border-2 border-orange-900 focus:ring-2 focus:border-2 focus:outline-2 focus:outline-transparent focus:ring-orange-900 focus:border-orange-900 rounded p-2 italic font-light"/>
            <button type="submit" className="bg-orange-100 px-5 py-2 rounded-xl w-1/3 text-xs lg:text-lg font-semibold text-orange-900 hover:outline hover:outline-orange-900 font-black italic">Add</button>
        </form>   
    </>
  )
}

export default AddToDoList