import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = ({menu}) => {
    const openMenu = useSelector(store => store.app.isMenuOpen)
    return <>
    {openMenu && (<div className="bg-white p-4 w-80">
        <ul>
        <h5><b>Subscriptions</b></h5>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Playlists</li>
        </ul><br/>
        <ul>
        <h5><b>Subscriptions</b></h5>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Playlists</li>
        </ul>
    </div>)}
  </>
}

export default Sidebar