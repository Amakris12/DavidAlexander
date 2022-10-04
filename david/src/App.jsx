import {React} from 'react'
import Home from './Pages/home'
import Banner from './Components/banner'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App = () => {
    return ( 
        <div>
           <Router>
            <Banner/>
                    <div>
                        <Navbar />
                            {/* <p style={{height: '10vh'}} /> */}
                            <Routes>
                                <Route index element={<Home />} />
                                {/* <Route path='about' element={(<About/>)} />
                                <Route path='songs' element={(<Songs/>)} />
                                <Route path='Movies' element={(<History/>)} /> */}
                                {/* <Route path='VideoGames' element={(</>)} /> */}
                            </Routes>
                        </div>
                    <Footer/>
                </Router>
        </div>
    )
}

export default App
