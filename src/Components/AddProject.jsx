import React from "react";
// import projectsData from "../projects.json";
import axios from "axios";

const AddProject  = () => {
    /**
     * projectName {string} : "Demo Project", 
     * projectUrl {url} : "https://www.github.com", 
     * about {string} : "This is what the project is about", 
     * demoUrl {string} : "/this/is/the/path/to/the/image-or-video", 
     * date {string} : "4/5/29", 
     * concepts {string} : [ "concept 1", "concept 2", "concept 3", "concept 4" ], 
     * lessons {string} : "This is how the project works"
     * Screenshot {imagefile}: "imagefile"
     */

    const [projectDetails, setProjectDetails] = React.useState({
        projectName: '',
        projectUrl: '',
        about: '',
        demoUrl: '',
        date: '',
        concepts: [],
        lessons: '',
        screenshot: null,
    });
    const [showDropHere, setShowDropHere] = React.useState(false);
    const [fileMessage, setFileMessage] = React.useState("Drag and Drop File Here");
    const [objectFile, setObjectFile] = React.useState(null);
    const [mouseDown, setMouseDown] = React.useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setProjectDetails({
            ...projectDetails,
            [name]: value,
        });
    };
    
    const handleConceptsChange = (e) => {
        const concepts = e.target.value.split(',').map((concept) => concept.trim());
        const name = e.target.name;
        console.log(name, concepts);
        setProjectDetails({
        ...projectDetails,
        concepts,
        });
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
        // console.log('file:', file); Success!
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (projectDetails.screenshot) {

            const formData = new FormData();
            formData.append('projectDetails', JSON.stringify(projectDetails));
            formData.append('screenshot', objectFile[0]);

            axios.post('/upload',
                formData,
                {
                    headers: {
                        'Allow-Control-Allow-Origin': '*',
                        'Content-Type': 'multipart/form-data'
                    },
                
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })

        }
        else {
            console.log("Screenshot not provided");
        }

        // Handle form submission logic (if needed)
        console.log('Submitted:', projectDetails);
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

    return(
        <div className="container-fluid">
            <div className="row">
                <h1>Add Project</h1>
                <hr />
                <div className="col pt-4">
                    <form onSubmit={handleFormSubmit} encType="multipart/form-data" >
                        {/* Project Name */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="projectName" className="col-sm-2 col-form-label">Project Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="projectName" id="projectName" onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Project Github URL */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="projectUrl" className="col-sm-2 col-form-label">Project URL</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="projectUrl" id="projectUrl" onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Project About */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="about" className="col-sm-2 col-form-label">About</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" name="about" id="about" rows="3" onChange={handleInputChange}></textarea>
                            </div>
                        </div>

                        {/* Project Date */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" name="date" id="date" onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Project Concepts */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="concepts" className="col-sm-2 col-form-label">Concepts</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name="concepts" id="concepts" onChange={handleConceptsChange} />
                            </div>
                        </div>

                        {/* Project Lessons */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="lessons" className="col-sm-2 col-form-label">Lessons</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" name="lessons" id="lessons" rows="3" onChange={handleInputChange}></textarea>
                            </div>
                        </div>

                        {/* Project Demo */}
                        <div className="mb-3 row text-start">
                            <label htmlFor="objectFile" className="col-sm-2 col-form-label">Demo</label>
                            <div className="col-sm-10">
                                <input type="file" className="form-control" name="screenshot" id="objectFile" onChange={ handleInputChange } onDrop={handleScreenshotDrop} onDragOver={ handleDragOver } onDragLeave={ handleDragLeave } />
                                <p>{ fileMessage }</p>

                                {
                                    (showDropHere)
                                    ? 
                                        <div className={dropZone} >
                                            {showDropHere && <div>Drop Here</div>}
                                        </div>
                                    : ""
                                }
                            </div>
                            {/* <img src={  } alt="screenshot" /> */}
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary" >Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddProject;