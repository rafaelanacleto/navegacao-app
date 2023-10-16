import './App.css'
import React from 'react'
import { BrowserRouter as Router } from  'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => (

    <div className='App'>
        <Menu />
        <Content></Content>
    </div>
)

export default App