import React from "react";
const ProjectInfo = [
  {
    projectName: "Music player Application",
    projectDescription:
      "Music player  Application- using React and Spotify API",
    linkVisit: "https://github.com/csumith/music-player",
    image: "",
  },
  {
    projectName: "Curd_Operation",
    projectDescription:
      "Curd Operation using HTML5,css3,Bootstrap",
    linkVisit: "https://github.com/csumith/taskz",
    image: "",
  },
  {
    projectName: "FullStack Application",
    projectDescription:
      "FullSatck Application  - using HTML5,css3,Bootstrap , expressJs ,mongodb ",
    linkVisit: "https://github.com/csumith/MERN---FullStack",
    image: "",
  },
  
];

const Projects = () => {
  return (
    <div className="container">
      <h1 className="text-center my-5"> Projects</h1>
      <div className="row">

        {
            ProjectInfo.map((item,index)=>{
            const { projectName,projectDescription,linkVisit}= item;
                
                return(
                    
                     <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 my-2" key={index}>
                        <div className="card w-100 h-100">
                            {/* <img src={image} alt={image} className="img-fluid card-img-top"/> */}
                            <div className="card-header text-center">
                                <div className="card-title my-2"><b>{projectName}</b></div>
                            </div>
                            <div className="card-body mx-1">
                                <p className="card-text lead">
                                    {projectDescription}
                                </p>
                                
                            </div>
                            <div className="text-center footer my-3">
                                    <a href={linkVisit} target="_blank" rel="noopener noreferrer" className="btn btn-success">Visit</a>
                                </div>
                        </div>
                     </div>
                )
            })
        }
       
      </div>
    </div>
  );
};

export default Projects;
