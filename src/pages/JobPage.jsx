import {useParams, useLoaderData, useNavigate} from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const job = useLoaderData()

  const handleDelete = async (e) =>{
    e.preventDefault()
    const res = await fetch(`http://localhost:3000/jobs/${job.id}`, {
      method: "DELETE"
    });
    toast.success('Job Deleted Succesfully!')
    return navigate('/jobs')
  }

  return (
    <>
      <section className='p-[30px]'>
          <Link className='text-indigo-500 text-lg flex items-center gap-3' to='/jobs'><FaArrowLeft/> Back to Job Listings</Link>
      </section>

      <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* Left Column - Job Description */}
        <div className="flex-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-sm text-gray-500">{job.type}</p>
            <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
            <p className="text-red-500 mb-4">{job.location}</p>

            <div className="border-t pt-4">
              <h2 className="font-semibold text-indigo-500 mb-2">Job Description</h2>
              <p className="text-gray-600 mb-4">
                {job.description}
              </p>
              <h3 className="font-medium text-indigo-500">Salary</h3>
              <p className="text-gray-600">{job.salary}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Company Info & Manage Job */}
        <div className="w-full md:w-80 flex flex-col gap-6">
          
          {/* Company Info */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2">Company Info</h2>
            <h3 className="font-semibold text-indigo-500">{job.company.name}</h3>
            <p className="text-gray-600 text-sm mt-2 mb-4">
             {job.company.description}
            </p>
            <div className="mt-4">
              <p className="text-indigo-600 font-medium">Contact Email:</p>
              <p className="text-blue-600">{job.company.contactEmail}</p>
            </div>
            <div className="mt-2">
              <p className="text-indigo-600 font-medium">Contact Phone:</p>
              <p className="text-gray-600">{job.company.contactNumber}</p>
            </div>
          </div>

          {/* Manage Job */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Manage Job</h2>
            <button className="bg-blue-600 text-white w-full py-2 rounded-md mb-2 hover:bg-blue-700">
             <Link  to={`/job/edit/${job.id}`}>Edit Job</Link>
            </button>
            <button type='button' onClick={e=>handleDelete(e)}  className="bg-red-600 text-white w-full py-2 rounded-md hover:bg-red-700">
              Delete Job
            </button>
          </div>

        </div>
      </div>
    </div>
    
    </>
  )
}

const jobLoader = async ({params}) =>{
  const res = await fetch(`http://localhost:3000/jobs/${params.id}`);
  const data = await res.json();
  return data
}

export { JobPage as default, jobLoader}