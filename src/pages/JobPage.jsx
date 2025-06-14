import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'

const JobPage = () => {
  const {id} = useParams()
  const [job, setJob] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchJob = async ()=>{
    try{
      const req = await fetch(`http://localhost:3000/jobs/${id}`);
      const res = await req.json();
      setJob(res)
    } 
    catch(err){
      console.log(`Error Fetching Data :(`);
    }
    finally{
      setLoading(false)
    }
  }

  fetchJob()
  }, [])

  return (
    <div>
        {loading ? <h1>Loading</h1>: <h1>{job.title}</h1>}
    </div>
  )
}

export default JobPage