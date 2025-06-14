const Hero = ({title="Learning React Today", subtitle="This is my first time learning React & Tailwind CSS"}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] bg-indigo-600 w-full p-[30px]">
        <h1 className="text-white text-5xl font-black my-5">{title}</h1>
        <h3 className="text-white text-[18px]">{subtitle}</h3>
    </div>
  )
}

export default Hero