import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const Homepage = () => {
  return (
    <>
        <Hero/>
        <HomeCards/>
        <JobListings homePage={true}/>
        <ViewAllJobs/>
    </>
  )
}

export default Homepage