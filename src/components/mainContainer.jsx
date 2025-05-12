import React, { useState, useEffect } from 'react'
import Card, {AdVideo} from '../Card'
import { fetchVideos } from '../api'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  const [videos, setVideos] = useState([])
  const getVideos = async () => {
    const resp = await fetchVideos()
    setVideos(resp)
  }
  useEffect(() => {
      getVideos()
  }, [])

  return <>
    <div className='flex-4/5 '>
    <div className='flex gap-5 flex-wrap justify-start'>
    {videos[0] && <AdVideo info={videos[0]}/>}
    {videos.map((video) => (
        <Link key={video.id} className=' w-80 whitespace-pre-line flex' to={'/watch?v='+ video.id}><Card  info={video}/></Link>
        ))}
    </div>
      
    </div>
  </>
}

export default MainContainer