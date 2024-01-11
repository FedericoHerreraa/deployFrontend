import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Tasks from './pages/tasks'
import AddTask from './pages/addTask'
import NavBar from './components/navBar'
import Home from './pages/home'
import { TaskProvider } from './context/taskContext'
import Whatsapp from './components/whatsapp'

function App() {
    return (
        <Whatsapp/>
      // <TaskProvider>
      //   <BrowserRouter>
      //     <NavBar/>
      //     <Routes>
      //       <Route path='/' element={<Home/>}/>
      //       <Route path='/tasks' element={<Tasks/>}/>
      //       <Route path='/add-task' element={<AddTask/>}/>
      //       <Route path='/update-task/:id' element={<AddTask/>}/>
      //     </Routes>
      //   </BrowserRouter>
      // </TaskProvider>
    )
}

export default App