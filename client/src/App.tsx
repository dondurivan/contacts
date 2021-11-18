import { Routes, Route, Link } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="about" element={<AboutPage />} />
        </Routes>
    )
}

export default App;