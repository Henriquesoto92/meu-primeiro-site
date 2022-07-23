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

      {/* <Content> */}
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/Projetos" element={<Projects/>}/>
          <Route path="/Cursos" element={<Courses/>}/>
          <Route path="/Contato" element={<Contact/>}/>
        </Routes>
      {/* </Content> */}

      <Footer/>
    </Router>

  )
}

export default App
