import { createContext, useContext, useState } from "react";
import { 
    getAllTasksRequest, 
    updateTasksRequest, 
    addTaskRequest, 
    getTaskRequest,
    deleteTasksRequest
} from "../api/task";

const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])

    const addTask = async (task) => {
        try {
            const res = await addTaskRequest(task)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const getTasks = async () => {
        try {
            const res = await getAllTasksRequest()
            console.log(res.data)
            setTasks(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async (id) => {
        try {
            const newTask = await getTaskRequest(id)
            console.log(newTask)
            return newTask.data
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async (id, task) => {
        try {
            await updateTasksRequest(id, task)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTask = async (id) => {
        try {
            console.log(id)
            const res = await deleteTasksRequest(id)
            if (res.status == 204) setTasks(tasks.filter(task => task._id != id))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider value={{ getTasks, tasks, updateTask, addTask, getTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTask = () => {
    return useContext(TaskContext)
}