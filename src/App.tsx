import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./style";
import { Home, Projects, Courses, Contact, Sharing } from "./screens";
import { Footer, Navigation } from "./components";

function App() {
    return (
        <Router>
            <S.Container>
                <Navigation />

                <S.Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Projetos" element={<Projects />} />
                        <Route path="/Cursos" element={<Courses />} />
                        <Route path="/Contato" element={<Contact />} />
                        <Route path="/Compartilhamento" element={<Sharing />} />
                    </Routes>
                </S.Content>

                <Footer />
            </S.Container>
        </Router>
    );
}

export default App;
