const Information = ({ text, value }) => {
  return (
    <div className="px-4 py-3 mx-3 bg-stone-200 rounded-lg shadow-md text-lg">
      {text}: <span className="font-bold">{value}</span>
    </div>
  )
}

export default Information