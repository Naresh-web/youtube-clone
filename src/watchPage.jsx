import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { closeMenu } from './appSlice'
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
  return <>
  <div>
  <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+ searchParams.get('v')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true'></iframe>
  </div>

  </>
}

export default WatchPage