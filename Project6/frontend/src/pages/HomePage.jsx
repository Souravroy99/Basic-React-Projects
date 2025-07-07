import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import RateLimitUI from '../components/RateLimitUI'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import api from '../lib/axios'
import NotesNotFound from '../components/NotesNotFound'

const HomePage = () => {

  const [isRateLimit, setIsRateLimit] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get(`/notes`)  
        setNotes(res.data)
        setIsRateLimit(false)
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
      finally {
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

      {
        notes.length === 0 && !isRateLimit && < NotesNotFound />

      }


      { notes.length > 0 && !loading && !isRateLimit && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                notes.map((note) => (
                  <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                ))
              }
          </div>
        )
      }
    </div> 
  )
}

export default HomePage