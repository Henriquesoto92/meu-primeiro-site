import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import {
  Home, 
  Projects, 
  Courses, 
  Contact 
} from './screens'
import {Content, Footer, Navigation} from "./components"



function App() {

  return (
    <Router>
      <Navigation/>
      <Footer/>
      {/* <Content> */}
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/Projetos" element={<Projects/>}/>
          <Route path="/Cursos" element={<Courses/>}/>
          <Route path="/Contato" element={<Contact/>}/>
        </Routes>
      {/* </Content> */}

      
    </Router>

  )
}

export default App
