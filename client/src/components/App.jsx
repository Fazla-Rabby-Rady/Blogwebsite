import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from './Navbar'
import Post from './Post'
import Posts from './Posts'
import Register from './Register'
import Settings from './Settings'
import Single from './Single'
import SinglePost from './SinglePost'
import Write from './Write'

const App = () => {

  const user=false;

  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/write' element={user ? <Write /> : <Register />} />
            <Route path='/settings' element={user ? <Settings /> : <Register />} />
            <Route path='/posts' element={<Posts />}/>
            <Route path='/posts/*' element={<SinglePost />}/>
            <Route path='/post' element={<Post />}/>
            <Route path='/post/*' element={<Single />}/>
            <Route path="/login" element={ user ? <Home /> : <Login />}/>
            <Route path='/register' element={ user ? <Home /> :<Register />}/>
            <Route path='/contact' element={<Settings />} />

            <Route path='*' element={<Home />} />
        </Routes>

    </>
  )
}

export default App