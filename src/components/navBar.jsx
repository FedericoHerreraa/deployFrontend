import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
            <nav className="flex justify-between w-full">
                <Link to='/'>
                    <h1 className="font-bold text-3xl">Task Manager</h1>
                </Link>
                <Link to='/add-task' className="text-2xl font-light">Nueva tarea</Link>
            </nav>
        </div>
    )
}

export default NavBar