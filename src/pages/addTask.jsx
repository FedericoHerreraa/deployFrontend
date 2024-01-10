import { useForm } from 'react-hook-form'
import { useNavigate, useParams, Link } from "react-router-dom"
import { useTask } from '../context/taskContext'
import { useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const AddTask = () => {
    const { register, handleSubmit, setValue } = useForm()
    const navigate = useNavigate()
    const params = useParams()
    const { updateTask, addTask, getTask } = useTask()

    useEffect(() => {
        async function cargarTarea() {
            if (params.id) {
                const task = await getTask(params.id)
                console.log(task)
                setValue('nombre', task.nombre)
                setValue('descripcion', task.descripcion)
            }
        }
        cargarTarea()
    }, [])
    
    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            updateTask(params.id, data)
        } else {
            addTask(data)
        }
        navigate('/tasks')
    }) 

    return (
        <>
            <Link to='/tasks' className='flex align-middle my-7 mx-3'>
                <ArrowBackIosIcon fontSize='medium' className='my-1'/>
                <p className='font-bold text-2xl'>Volver</p>
            </Link>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md mx-3'>
                <form onSubmit={onSubmit} className='flex flex-col w-30'>
                    <input 
                        type="text" 
                        placeholder="Titulo"
                        {...register('nombre')}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    />
                    <input 
                        type="text" 
                        placeholder="Descripcion"
                        {...register('descripcion')}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    />
                    <input type="submit" value='Guardar' className='bg-green-500 cursor-pointer w-auto mx-20 my-3 rounded-md'/>
                </form>
            </div>
        </>
    )
}

export default AddTask