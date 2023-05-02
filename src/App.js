import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import PlaylistDetail from './components/PlaylistDetail/PlaylistDetail';
import Cadastro from './pages/Cadastro';
import Faq from './pages/Faq';
import Home from './pages/Home/Home';
import Login from './pages/Login';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Navigate to="/Home" replace />}
                />
                <Route exact path="/Home" element={<Home />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Faq" element={<Faq />} />
                <Route path="/playlist/:id" element={<PlaylistDetail />} />
            </Routes>
        </div>
    );
}

export default App;
