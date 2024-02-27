import { useTodos } from "../store/todos";
import { useSearchParams } from 'react-router-dom'

function Todos() {
    const {todos, toggleTodoAsCompleted,handleDeleteTodo}  = useTodos();

    const [seacrhParams] = useSearchParams();
    let todosData = seacrhParams.get("todos");
    console.log(todosData)

    let filterData = todos;

    if(todosData === 'active'){
        filterData = filterData.filter((task)=>!task.completed)
    }

    if(todosData === 'completed'){
        filterData = filterData.filter((task)=>task.completed)
    }

    return (
    <>
    <ul className="font-[Merriweather] text-xl">
        {
            filterData.map((todo)=>{
                return (
                    <>
                    <li key={todo.id} className="my-3 px-3 flex items-center">
                        <input type="checkbox" 
                            id={`todo-${todo.id}`} 
                            checked={todo.completed}
                            onChange={()=>toggleTodoAsCompleted(todo.id)}
                            className="w-1/5"
                        />
                        <label htmlFor={`todo-${todo.id}`} className={`w-2/5 py-1 ${todo.completed ? 'line-through' : 'no-underline'} italic font-medium`}>{todo.task}</label>
                        {
                            todo.completed && (
                                <>
                                <button type="button" 
                                        onClick={()=>handleDeleteTodo(todo.id)}
                                        className="bg-red-600 text-orange-100 text-xs lg:text-lg w-1/5 mx-auto py-1 rounded-md font-medium italic"
                                >Delete</button>
                                </>
                            )
                        }
                    </li>
                    </>
                )
            })
        }
    </ul>
    </>
  )
}

export default Todos