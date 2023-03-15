import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import Home from './pages/Home'
import Home_2 from './pages/Home_2'
import Home_3 from './pages/Home_3'
import Home_4 from './pages/Home_4'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Error from './pages/Error'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Home_2' element={<Home_2 />} />
          <Route exact path='/Home_3' element={<Home_3 />} />
           <Route exact path='/Home_4' element={<Home_4 />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/BlogDetails' element={<BlogDetails />} />
          <Route exact path='/Portfolio' element={<Portfolio />} />
          <Route exact path='/Error' element={<Error />} />
        </Routes>   
        <Footer />
        </Router>

    </div>
      
  )
}

export default App
      {/* <Home/> */}
      {/* <Home_2/> */}
      {/* <Home_3/> */}
      {/* <Home_4/> */}
      {/* <About/> */}
      {/* <Portfolio/> */}
      {/* <Blog/> */}
      {/* <BlogDetails/> */}
      {/* <Error/> */}
      
