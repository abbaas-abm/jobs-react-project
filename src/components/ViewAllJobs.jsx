import { Link } from "react-router-dom"

const ViewAllJobs = () => {
  return (
    <div className="p-[30px] flex justify-center w-full">
        <Link to="/jobs" className="inline-block text-lg bg-black rounded-lg text-white text-center py-2 px-5 transition-all hover:scale-115 w-[300px]">View All Jobs</Link>
    </div>
  )
}

export default ViewAllJobs