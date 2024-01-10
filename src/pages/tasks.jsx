import { useEffect } from "react"
import { useTask } from "../context/taskContext"
import { Link } from "react-router-dom"

const Tasks = () => {
    const { tasks, getTasks, deleteTask } = useTask()

    useEffect(() => {
        getTasks()
    }, [])  

    return (
        <div>
            <div className="flex justify-center">
                <h1 className="font-bold text-3xl border-b-2">Tareas</h1>
            </div>
            <div className="grid grid-cols-3 gap-2 py-3 px-3">
                {tasks.length === 0 ? (<h1 className="text-2xl">No hay tareas</h1>) : (
                    tasks.map(task => (
                        <div key={task._id} className="bg-zinc-800 min-w-10 p-10 rounded-md my-10 mb-4 flex justify-between">
                            <div>
                                <h1 className="font-bold text-2xl my-3">{task.nombre}</h1>
                                <p>{task.descripcion}</p>
                            </div>
                            <div>
                                <Link to={`/update-task/${task._id}`} className="py-2 px-3 my-3 mx-3 bg-blue-500 rounded-md">Editar</Link>
                                <button onClick={() => deleteTask(task._id)} className="py-2 px-3 my-3 mx-3 bg-red-500 rounded-md">Eliminar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Tasks