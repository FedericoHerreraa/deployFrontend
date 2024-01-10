import axios from 'axios'

export const addTaskRequest = async (task) => axios.post('http://localhost:4000/api/add-task', task)

export const getAllTasksRequest = async () => axios.get('http://localhost:4000/api/tasks')

export const getTaskRequest = async (id) => axios.get(`http://localhost:4000/api/task/${id}`)

export const updateTasksRequest = async (id, task) => axios.put(`http://localhost:4000/api/update-task/${id}`, task)

export const deleteTasksRequest = async (id) => axios.delete(`http://localhost:4000/api/delete-task/${id}`)