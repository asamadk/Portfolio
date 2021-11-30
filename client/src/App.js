import './App.css';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import { Routes , Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import EducationAdmin from './Pages/EducationAdmin';
import ExperienceAdmin from './Pages/ExperienceAdmin';
import MessageAdmin from './Pages/MessageAdmin';
import NotFound from './Pages/NotFound';
import PorfolioUI from './Pages/PorfolioUI';
import ProjectAdmin from './Pages/ProjectAdmin';
import SkillAdmin from './Pages/SkillAdmin';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<Home/>}>
          
        </Route>
        <Route exact path="/education" element = {<EducationAdmin/>}>
          
        </Route>
        <Route exact path="/experience" element = {<ExperienceAdmin/>}>
          
        </Route>
        <Route exact path="/message" element = {<MessageAdmin/>}>
          
        </Route>
        <Route exact path = "/error" element = {<NotFound/>}>
          
        </Route>
        <Route exact path= "/user" element = {<PorfolioUI/>}>
          
        </Route>
        <Route exact path = "/project" element = {<ProjectAdmin/>}>
          
        </Route>
        <Route exact path="/skill" element = {<SkillAdmin/>}>
          
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
