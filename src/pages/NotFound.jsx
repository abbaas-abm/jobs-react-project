import {FaExclamationTriangle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
   <div className="flex flex-col items-center justify-center text-center h-screen w-full bg-gray-100 px-4">
      <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">Error 404</h1>
      <p className="text-lg text-gray-600 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
      >
        Return Home
      </Link>
    </div>
  )
}

export default NotFound