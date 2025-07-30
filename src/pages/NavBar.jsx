import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = ({ activePage }) => {
    return (
        <nav className="navbar">
            <Link to="/" className={activePage === 'home' ? 'active' : ''}>Home</Link>
            <Link to="/" className={activePage === 'create' ? 'active' : ''}>Create Crewmate</Link>
            <Link to="/" className={activePage === 'gallery' ? 'active' : ''}>Crewmate Gallery</Link>

        </nav>
    )
}
export default NavBar