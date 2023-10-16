import './Menu.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'


const Menu = props => (

    <aside className='Menu'>
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Contador
                </li>
                <li>
                    About
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu