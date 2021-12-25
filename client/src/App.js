import './App.css';

import { Routes , Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import EducationAdmin from './Pages/EducationAdmin';
import ExperienceAdmin from './Pages/ExperienceAdmin';
import MessageAdmin from './Pages/MessageAdmin';
import NotFound from './Pages/NotFound';
import PorfolioUI from './Pages/PorfolioUI';
import ProjectAdmin from './Pages/ProjectAdmin';
import SkillAdmin from './Pages/SkillAdmin';
import Register from './Pages/Register';
import Login from './Pages/Login';
import isLogin from './Shared/authorization';
import { useState} from 'react';
import { useEffect } from 'react';
import Navbar from './Component/navbar';
import Footer from './Component/footer'
import NavbarSection from './Component/NavbarSection';

function App() {

  const[isLogged,setIsLogged] = useState(isLogin);

  useEffect(() => {
    setIsLogged(isLogin)
  }, []);

  return (
    <>
        <Navbar/>
        <NavbarSection/>
        <Routes>
        <Route exact path = "/error" element = {<NotFound/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<PorfolioUI/>}/>
        <Route path="/education" element = {<EducationAdmin/>} />
        <Route path="/projects" element = {<ProjectAdmin/>} />
        <Route path="/skills" element = {<SkillAdmin/>} />
        <Route path="/experience" element = {<ExperienceAdmin/>} />
        </Routes>
        {/* <Footer/> */}
      </>
  );
}

export default App;
