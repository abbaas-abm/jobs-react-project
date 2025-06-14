import { Link } from "react-router-dom"
import Card from "./Card"

const HomeCards = () => {
  return (
    <div className="flex justify-center gap-8 items-center w-full p-[30px] max-sm:flex-col">
        {/* CARD 1 */}
        <Card>
            <h1 className="text-2xl font-bold">For Developers</h1>
            <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sapiente?</p>
            <Link className="mt-5 inline-block bg-black py-2 px-2.5 rounded-lg text-center text-white w-[150px] transition-all hover:scale-115" to="/jobs">View Jobs</Link>
        </Card>
        {/* CARD 2 */}
        <Card bg="bg-indigo-100">
            <h1 className="text-2xl font-bold">For Employers</h1>
            <p className="mt-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sapiente?</p>
            <Link className="mt-5 inline-block bg-indigo-400 py-2 px-2.5 rounded-lg text-center text-white w-[150px] transition-all hover:scale-115" to="/add-job">List Jobs</Link>
        </Card>
        
    </div>
  )
}

export default HomeCards