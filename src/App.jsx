import './App.css'
import Home from './Pages/Home/Home.jsx'
import logoAndName from './assets/logo-medium.png'
import NewPost from "./Pages/NewPost/NewPost.jsx";
import {Route, Routes, NavLink, Link} from "react-router-dom";
import Overview from "./Pages/Overview/Overview.jsx";
import DetailedBlog from "./Pages/DetailedBlog/DetailedBlog.jsx";

function App() {
    return (
        <>
            <nav className="navBar">
                <div className="navWrapper">
                    <div className="navLogoAndName">
                        <Link to="/">
                        <img src={logoAndName} alt="LogoAndName"/>
                        </Link>
                    </div>
                    <div className="navItems">
                        <ul>
                            <li>
                                <NavLink to="/" className={({isActive})=> isActive === true ? 'active-link':'default-link'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/alle-posts" className={({isActive})=> isActive === true ? 'active-link':'default-link'}>Alle posts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/nieuwe-post-maken" className={({isActive})=> isActive === true ? 'active-link':'default-link'}>Nieuwe post maken</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/alle-posts" element={<Overview/>}/>
                <Route path="/nieuwe-post-maken" element={<NewPost/>}/>
                <Route path="/blog/:id" element={<DetailedBlog/>}/>
            </Routes>
        </>
    )
}

export default App
