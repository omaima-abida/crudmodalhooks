import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ArticlesApp from './Components/articles/ArticlesApp';
import CategoriesApp from './Components/categories/CategoriesApp';
import ScategoriesApp from './Components/scategories/ScategoriesApp';
import Navscroll from './Components/Navscroll';



function App() {
  return (
    <Router>
      <Navscroll/>
      <Routes>
        <Route path = "/articles" element={<ArticlesApp/>}/>
        <Route path = "/categories" element={<CategoriesApp/>}/>
        <Route path = "/scategories" element={<ScategoriesApp/>}/>
      </Routes>
    </Router>

  )
}

export default App;
