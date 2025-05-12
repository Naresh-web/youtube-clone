import React, { useEffect, useState } from 'react'
import { logo } from './constants'
import BellIcon from './assets/bell.png'
import UserIcon from './assets/user.png'
import MenuIcon from './assets/menu.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from './appSlice'
import { searchApi } from './api'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setsuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  console.log(suggestions);
  const dispatch = useDispatch()
  const handleMenu = () => {
    dispatch(toggleMenu())
  }
  useEffect(() => {
    const timer = setTimeout(() => fetchSearch(), 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [searchQuery])
  const fetchSearch = async () => {
    const res = await searchApi(searchQuery)
    setsuggestions(res)
  }


  return <>
  <div className="parent contain-layout p-4 shadow-lg z-999 sticky">
  <div className='flex items-center gap-2 cursor-pointer'>
  <div className="menu">
    <img onClick={handleMenu} src={MenuIcon} className="w-4" alt="" />
  </div>
  <div className="logo">
      <img src={logo} alt="" />
    </div>
  </div>
  <div className="globalSearch">
    <input className=' border-r-0 w-lg border-gray-400 rounded-bl-4xl border rounded-tl-4xl py-2 px-3' type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='Search' onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} />
    <button className='rounded-tr-4xl rounded-br-4xl border-gray-400 border py-2 px-4 cursor-pointer'>&#x1F50D;</button>
    {showSuggestions && (
      <div className="fixed bg-white p-2 shadow-lg rounded-lg w-[37rem] z-999">
        <ul>
          <li> Search results</li>
        </ul>
      </div>
    )}
  </div>
    <div className="profileArea">
      <button className="border px-2 py-1">+ Create</button>
      <span><img src={BellIcon} alt="" /></span>
      <span><img src={UserIcon} alt="" /></span>
    </div>
  </div>

  </>
}

export default Header