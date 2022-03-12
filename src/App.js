import React, { useEffect } from 'react';
import Navigation from './Components/Navigation.js'
import Home from './Components/Home.js'
import Display from './Components/Display.js'
import { useDispatch} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { loadBlogs } from './store/Actions/blogActions';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(loadBlogs())

  }, [dispatch])
  

  return (
    <>
      <Navigation />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Display />} />
      </Routes>
    </>
  )
}

export default App