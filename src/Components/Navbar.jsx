import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

import ProjectForm from "./test";
// import data from "../projects.json";

const Navbar = () => {
    // const [myData] = data;
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"> Portfolio </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Links */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            <Link to="/project/add" className="nav-link">Add Project</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/test" className="nav-link">Project Form</Link>
                        </div>

                    </div>
                </div>
            </nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project/add" element={<AddProject  />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/project/edit/:id" element={<EditProject />} />
                <Route path="/test" element={<ProjectForm  />} />
            </Routes>

        </Router>
    )
}

export default Navbar;