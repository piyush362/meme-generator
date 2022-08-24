import React from 'react'
import './Style.css'
export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav--title'>
                <img src='images/trollface.png' className='nav--logo'></img>
                <h3>Meme Generator</h3>
            </div>
            <div className='nav--discription'>
                <h4>Made with love 💛</h4>
            </div>
        </nav>
    )
}

