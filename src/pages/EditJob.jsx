import { useState } from "react"
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJob = () => {
    const job = useLoaderData();
    const navigate = useNavigate();
    // JOB DETAILS
    const [jobType, setJobType] = useState(job.type);
    const [jobTitle, setJobTitle] = useState(job.title);
    const [jobDescription, setJobDescription] = useState(job.description);
    const [jobLocation, setJobLocation] = useState(job.location);
    const [jobSalary, setJobSalary] = useState(job.salary);

    const handleJobTypeChange = (e)=>{
        setJobType(e.target.value);
    }
    const handleJobTitle = (e)=>{
        setJobTitle(e.target.value);
    }
    const handleJobDesc = (e)=>{
        setJobDescription(e.target.value);
    }
    const handleJobLocation = (e)=>{
        setJobLocation(e.target.value);
    }
    const handleSalaryChange = (e)=>{
        setJobSalary(e.target.value);
    }

    // COMPANY DETAILS
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [companyEmail, setCompanyEmail]= useState(job.company.contactEmail);
    const [companyPhone, setCompanyPhone] = useState(job.company.contactNumber);

    const handleComapnyName = (e)=>{
        setCompanyName(e.target.value)
    }
    const handleComapnyDesc = (e)=>{
        setCompanyDescription(e.target.value)
    }
    const handleComapnyEmail = (e)=>{
        setCompanyEmail(e.target.value)
    }
    const handleComapnyPhone = (e)=>{
        setCompanyPhone(e.target.value)
    }

    // JOB SUBMIT
    const handleUpdateJob = (e)=>{
        e.preventDefault()
       
        const updateJob = async ()=>{
            try{
                const req = await fetch(`http://localhost:3000/jobs/${job.id}`, {
                    method: 'PUT',
                    body: JSON.stringify({
                            title: jobTitle,
                            type: jobType,
                            description: jobDescription,
                            location: jobLocation,
                            salary: jobSalary,
                            company: {
                            name: companyName,
                            description: companyDescription,
                            contactEmail: companyEmail,
                            contactNumber: companyPhone
    }
  }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }

            catch(e){
                console.log(`Something went wrong :( ${e}`);
            }

            finally{
                setJobType('');
                setJobTitle('');
                setJobDescription('');
                setJobLocation('');
                setJobSalary('');
                setCompanyName('');
                setCompanyEmail('');
                setCompanyDescription('');
                setCompanyPhone('');
                toast.success('Job Edited Succesfully')
                return navigate('/jobs');
            }
        }

        updateJob()

    }




  return (
   <>
    <h1 className="text-center text-2xl font-bold text-indigo-500 my-4">Edit Job</h1>

    <div className="mx-auto max-w-[60%] my-5 bg-indigo-100 p-5">
        <form  onSubmit={e=> handleUpdateJob(e)} className="space-y-6">
            <div className="border-b border-gray-200 pb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Job Details</h3>

                <div className="my-3">
                    <label htmlFor="job-type" className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                    <div className="mt-1">
                        <select onChange={(e)=>handleJobTypeChange(e)} value={jobType} id="job-type" name="job-type"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out bg-gray-50 text-gray-900">
                            <option value="">Select Job Type</option>
                            <option value="Full-time">Full-time</option>
                            <option value="Part-time">Part-time</option>
                        </select>
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="job-title" className="block text-sm font-medium text-gray-700 my-3">Job Title</label>
                    <div className="mt-1">
                        <input onChange={e => handleJobTitle(e)} value={jobTitle} type="text" id="job-title" name="job-title" placeholder="e.g., Software Engineer"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base placeholder-gray-400 transition duration-150 ease-in-out bg-gray-50 text-gray-900"/>
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="job-description" className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                    <div className="mt-1">
                        <textarea onChange={e => handleJobDesc(e)} value={jobDescription} id="job-description" name="job-description" rows="5"
                            placeholder="Provide a detailed description of the job responsibilities and requirements."
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base placeholder-gray-400 resize-y transition duration-150 ease-in-out bg-gray-50 text-gray-900"></textarea>
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="job-location" className="block text-sm font-medium text-gray-700 mb-2">Job Location</label>
                    <div className="mt-1">
                        <input onChange={e => handleJobLocation(e)} value={jobLocation} type="text" id="job-location" name="job-location" placeholder="e.g., New York, NY or Remote"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base placeholder-gray-400 transition duration-150 ease-in-out bg-gray-50 text-gray-900"/>
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="job-salary" className="block text-sm font-medium text-gray-700 mb-2">Job Salary Range</label>
                    <div className="mt-1">
                        <select onChange={e => handleSalaryChange(e)} value={jobSalary} id="job-salary" name="job-salary"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base transition duration-150 ease-in-out bg-gray-50 text-gray-900">
                            <option value="">Select Salary Range</option>
                            <option value="$22,000 - $37,000">$22,000 - $37,000</option>
                            <option value="$38,000 - $55,000">$38,000 - $55,000</option>
                            <option value="$56,000 - $75,000">$56,000 - $75,000</option>
                            <option value="$76,000 - $100,000">$76,000 - $100,000</option>
                            <option value="$100,000+">$100,000+</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="pt-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Company Information</h3>

                <div className="my-3">
                    <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <div className="mt-1">
                        <input onChange={e => handleComapnyName(e)} value={companyName} type="text" id="company-name" name="company-name" placeholder="e.g., InnovateTech Inc."
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base placeholder-gray-400 transition duration-150 ease-in-out bg-gray-50 text-gray-900"/>
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="company-description" className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
                    <div className="mt-1">
                        <textarea  onChange={e => handleComapnyDesc(e)} value={companyDescription} id="company-description" name="company-description" rows="5"
                            placeholder="Tell us about your company, its mission, and culture."
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base placeholder-gray-400 resize-y transition duration-150 ease-in-out bg-gray-50 text-gray-900"></textarea>
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="company-email" className="block text-sm font-medium text-gray-700 mb-2">Company Email</label>
                    <div className="mt-1">
                        <input onChange={e => handleComapnyEmail(e)} value={companyEmail}  type="email" id="company-email" name="company-email" placeholder="e.g., hr@innovatetech.com"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base placeholder-gray-400 transition duration-150 ease-in-out bg-gray-50 text-gray-900"/>
                    </div>
                </div>

                <div className="my-3">
                    <label htmlFor="company-phone" className="block text-sm font-medium text-gray-700 mb-2">Company Phone Number</label>
                    <div className="mt-1">
                        <input onChange={e => handleComapnyPhone(e)} value={companyPhone} type="tel" id="company-phone" name="company-phone" placeholder="e.g., +1 (555) 123-4567"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base placeholder-gray-400 transition duration-150 ease-in-out bg-gray-50 text-gray-900"/>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-6">
                <button 
                    className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105">
                    Update Job
                </button>
            </div>
        </form>
    </div>
   </>
  )
}

export default EditJob