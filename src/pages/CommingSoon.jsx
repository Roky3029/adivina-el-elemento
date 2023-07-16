import { Helmet } from 'react-helmet'

const CommingSoon = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <Helmet>
        <title>Trabajando en ello... | AEE</title>
      </Helmet>

      <div className='bg-teal-100 p-10 rounded-lg shadow-lg flex flex-col items-center justify-center'>
        <h2 className='text-2xl animate-pulse'>Trabajando en ello...</h2>
        <div>
          <lord-icon
            src="https://cdn.lordicon.com/pndvzexs.json"
            trigger="loop"
            delay="1000"
            style={{ width: '250px', height: '250px' }}>
          </lord-icon>
        </div>
      </div>
    </div>
  )
}

export default CommingSoon
