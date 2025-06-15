import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {

  const activeCheck = ({isActive}) => isActive ? 'text-white  transition-all active py-2 px-3': 'text-white hover:bg-gray-900 py-2 px-3 rounded-lg transition-all'

  return (
    <nav className="flex justify-around items-center p-[20px] min-h-10 bg-indigo-600 gap-5 border-b-1 border-b-gray-100 ">
        <Link to="/"><h2 className="font-extrabold text-white text-3xl">Learning React</h2></Link>
        <ul className="flex space-x-10">
            <li><NavLink className={activeCheck} to="/">Home</NavLink></li>
            <li><NavLink className={activeCheck} to="/jobs">Jobs</NavLink></li>
            <li><NavLink className={activeCheck} to="/add-job">Add Job</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar