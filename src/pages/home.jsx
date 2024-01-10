import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <div className="flex justify-center py-3 w-fit m-auto px-20 border-b-2">
                <h1 className="text-3xl">Home</h1>
            </div>
            <Link to='/tasks' className="bg-blue-400 p-3 rounded-md mx-5">Mis tareas</Link>
        </div>
    )
}

export default Home