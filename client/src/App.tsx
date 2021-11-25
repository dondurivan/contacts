import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Categories/Categories";
import AboutPage from './pages/AboutPage/AboutPage';
import Category from "./pages/Categories/Category/Category";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:categoryID" element={<Category />} />
            <Route path="about" element={<AboutPage />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    )
}

export default App;