import { useEffect, useState } from 'react';
import {PropagateLoader} from 'react-spinners'
import Listing from './Listing';

const JobListings = ({homePage=false}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const fetchJobs = async () => {
        try{
        let apiURL = homePage ? 'http://localhost:3000/jobs?_limit=3': 'http://localhost:3000/jobs'
        const res = await fetch(apiURL)
        const data = await res.json();
        setJobs(data)
        }
        catch (error){
          console.log('Failed to fetch data', error);
        }
        finally{
          setLoading(false)
        }
      }
     fetchJobs()

    }, [])


  return (
    <section className=" bg-indigo-100 py-5">
        <h1 className="text-center font-extrabold text-2xl text-indigo-400 ">{homePage ? 'Browse Jobs' : 'All Jobs'}</h1>
        <div className="p-[30px] grid grid-cols-3 items-stretch gap-5 max-md:grid-cols-2 max-sm:grid-cols-1 ">
            {loading ? 
             <div className="flex justify-center items-center w-screen"><PropagateLoader color='plum'/></div>:
             jobs.map(job => <Listing type={job.type} title={job.title} desc={job.description} pay={job.salary} location={job.location} uid={job.id} key={job.id} />)}
        </div>
    </section>
  )
}

export default JobListings