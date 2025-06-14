import { useState } from "react";
import {FaMapMarker} from "react-icons/fa";
import { Link } from "react-router-dom"

const Listing = ({type, title, desc, pay,location, uid}) => {

    const [descriptionView, setDescriptionView] = useState(false)

    const handleDescriptionToggle = ()=>{
        setDescriptionView(prevState => !prevState)
    }

  return (
    <div className="h-full flex flex-col max-w-[400px]  shadow-sm rounded-lg bg-white p-3 hover:-translate-y-2 transition-all cursor-pointer">
                <h3 className="text-[18px] text-black opacity-70">{type}</h3>
                <h2 className="font-bold text-lg mb-5">{title}</h2>
                <p className="text-md ">{descriptionView ? desc : `${desc.slice(0,90)}...`}</p>
                <a href="#!" onClick={handleDescriptionToggle} className="text-purple-500 my-3">{descriptionView === true ? 'Less' : 'More'}</a>
                <div className="font-semibold text-black opacity-70 mt-3">{pay}</div>
                <hr className="opacity-40 my-5"/>
                <div className="max-sm:flex max-sm:justify-between max-sm:align-center">
                <div className="text-red-500 flex align-center"> <FaMapMarker className="mr-1"/> {location}</div>
                <Link to={`/job/${uid}`} className="inline-block text-white my-3 bg-indigo-400 py-2 px-2 w-full text-center rounded-md hover:bg-indigo-500 transition-all max-sm:w-[30%]">Read More</Link>
                </div>
    </div>
  )
}

export default Listing