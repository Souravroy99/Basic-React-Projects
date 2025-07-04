import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import RateLimitUI from '../components/RateLimitUI'
import toast from 'react-hot-toast'

const HomePage = () => {

  const [isRateLimit, setIsRateLimit] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:5001/api/notes')  
        setNotes(res.data)
        setIsRateLimit(false)
        // console.log(res.data) 
      } 
      catch (error) {
        console.log(`Error fetching notes: ${error}`)
        if(error.response.status === 429) {
          setIsRateLimit(true)
        }
        else {
          toast.error("Failed to loas notes")
        }
      }
      finally{
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])
 
  return (
    <div className='min-h-screen'>
      <Navbar />
      {
        isRateLimit && <RateLimitUI />
      }

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className='text-center text-primary py-10'>Loading Notes...</div> }
      </div>
    </div> 
  )
}

export default HomePage