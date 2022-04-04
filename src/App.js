import React from 'react'
import PostInfo from './components/PostInfo'
import UsersList from './components/UsersList'
import Header from './components/Header'
import './App.css'

const App = (props) => {
    return (
        <div>
            <Header />
            <div id="container">
                <div id="box1">
                    <PostInfo />
                </div>
                <div id="box2">
                    <UsersList />
                </div>
        </div>
        </div>
        
    )
}

export default App