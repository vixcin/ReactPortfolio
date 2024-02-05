import React from "react";
import data from "../projects.json";
import { useParams, Link } from "react-router-dom";

const EditProject = () => {
    // Get the project id from the URL
    const { id } = useParams();
    const projectId = parseInt(id);
    console.log(data);
    console.log(id);
    // Get the project details from the JSON data
    const datum = data[projectId - 1];
    // State to store project details
    const [projectDetails, setProjectDetails] = React.useState({
        projectName: datum.projectName,
        projectUrl: datum.projectUrl,
        about: datum.about,
        demoUrl: datum.demoUrl,
        date: datum.date,
        concepts: datum.concepts.join(', '),
        lessons: datum.lessons,
        screenshot: datum.screenshot, // Display existing image
    });


    const [fileMessage, setFileMessage] = React.useState("");
    const [showDropHere, setShowDropHere] = React.useState("");
    const [mouseDown, setMouseDown] = React.useState("");
    const [objectFile, setObjectFile] = React.useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProjectDetails({
        ...projectDetails,
        [name]: value,
        });
    };

    const handleConceptsChange = (e) => {
        setProjectDetails({
        ...projectDetails,
        concepts: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // store the project details in the JSON data
        data[parseInt(projectId['id']) - 1] = projectDetails;

        // redirect to the home page
        window.location.href = "/";
    };

    const handleScreenshotDrop = (e) => {
        e.preventDefault();

        setShowDropHere(false);
        setFileMessage("Great. Your File Dropped In");

        console.log(e.dataTransfer.files);

        setObjectFile(e.dataTransfer.files);

        const file = e.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
        setProjectDetails({
            ...projectDetails,
            screenshot: event.target.result,
        });
        };

        reader.readAsDataURL(file);
        console.log('file:', file);
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();

        setShowDropHere(true);

        e.dataTransfer.dropEffect = "copy";

        console.log("dragging over");
    }

    const handleDragLeave = (e) => {
        e.preventDefault();

        // if the mouse is still down, don't hide the drop zone
        if (mouseDown) {
            return;
        } else {
            setShowDropHere(false);
            setFileMessage("Drag and Drop File Here");
        }

        console.log("dragging left");
    }

    document.onmousedown = () => {
        setMouseDown(true);
    }

    document.onmouseup = () => {
        setMouseDown(false);
    }


    const dropZone = "col w-100 bg-warning opacity-25 border border-primary rounded p-5 text-center";


    return (
        <div className="container-fluid">
            <div className="row">
                <h1>Add Project</h1>
                <p>{ fileMessage }</p>
                <hr />
                <div className="col">
                    <form onSubmit={handleFormSubmit} >
                        {/* Project Name */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="projectName" className="col-sm-2 col-form-label">Project Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="projectName" value={projectDetails.projectName} onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Project Github URL */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="projectUrl" className="col-sm-2 col-form-label">Project URL</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="projectUrl" value={projectDetails.projectUrl} onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Project About */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="about" className="col-sm-2 col-form-label">About</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="about" rows="3" value={projectDetails.about} onChange={handleInputChange}></textarea>
                            </div>
                        </div>

                        {/* Project Date */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="date" value={projectDetails.date} onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Project Concepts */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="concepts" className="col-sm-2 col-form-label">Concepts</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="concepts" onChange={handleConceptsChange} />
                            </div>
                        </div>

                        {/* Project Lessons */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="lessons" className="col-sm-2 col-form-label">Lessons</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="lessons" rows="3" value={projectDetails.lessons} onChange={handleInputChange}></textarea>
                            </div>
                        </div>

                        {/* Project Demo */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="objectFile" className="col-sm-2 col-form-label">Demo</label>
                            <div className="col-sm-10">
                                <input type="file" className="form-control" id="objectFile" onDrop={handleScreenshotDrop} onDragOver={ handleDragOver } onDragLeave={ handleDragLeave } />
                                {
                                    (showDropHere)
                                    ? 
                                        <div className={dropZone} >
                                            {showDropHere && <div>Drop Here</div>}
                                        </div>
                                    : ""
                                }
                            </div>
                        </div>

                        <div className="form-group d-flex justify-content-between pt-4">
                            {/* Cancel Button */}
                            <Link to={`/project/${projectDetails.id}`} className="btn btn-outline-warning">Cancel</Link>
                            {/* Save Changes */}
                            <button type="submit" className="btn btn-primary">Update Project</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default EditProject;