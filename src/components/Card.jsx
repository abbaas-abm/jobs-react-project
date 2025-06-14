const Card = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`min-w-[40vw] p-[30px] min-h-[200px] ${bg} rounded-lg shadow-lg`}>
        {children}
    </div>
  )
}

export default Card