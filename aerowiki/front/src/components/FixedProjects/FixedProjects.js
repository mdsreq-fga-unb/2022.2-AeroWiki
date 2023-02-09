import React from "react";
// import './FixedProjects.css'
import { Link } from "react-router-dom";
// import { ProjectsData } from '../ProjectsTable/ProjectsData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";

function FixedProjects() {
  return (
    <div id="fixed-projects-container">
      <div className="pad-box">
        <div className="title">
          <span>PROJETOS FIXADOS</span>
          <div className="hr"></div>
        </div>
        <div className="fixed-projects">
          {JSON.parse(sessionStorage.getItem("projectsData")).map(
            (item, index) => {
              if (item.isfixed) {
                return (
                  <div
                    id={"projeto-" + index}
                    className="fixed-project"
                    key={index}
                  >
                    <div
                      id="project-image"
                      style={{ backgroundImage: `url(${item.img})` }}
                    ></div>
                    <div id="project-text">
                      <div id="top">
                        <div id="project-areas">
                          <Link className="project-areas-text">
                            {item.area}
                          </Link>
                          <FontAwesomeIcon
                            icon={faIcons.faChevronRight}
                            className="project-areas-text"
                          />
                          <Link className="project-areas-text">
                            {item.subarea}
                          </Link>
                        </div>
                      </div>
                      <div id="bot">
                        <Link
                          to="#"
                          id="project-title"
                          onClick={() => {
                            sessionStorage.setItem("projeto_id", item._id);
                            sessionStorage.setItem("editable", item.editable);

                            if (item.active) {
                              window.location.href = "/projeto";
                            }
                          }}
                        >
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  </div>

                  // <div className='fixed-project' key={index} >
                  //   <div id='project-image' style={{ backgroundImage: `url(${item.img})` }}></div>
                  //   <div id='project-text'>
                  //     <div id='top'>
                  //       <div id='project-areas'>
                  //         <Link to={item.area_path} className='project-areas-text'>{item.area}</Link>
                  //         <FontAwesomeIcon icon={faIcons.faChevronRight} className='project-areas-text' />
                  //         <Link to={item.subarea_path} className='project-areas-text'>{item.subarea}</Link>
                  //       </div>
                  //       <Link to='#' className='project-options'>
                  //         <FontAwesomeIcon icon={faIcons.faEllipsis} />
                  //       </Link>
                  //     </div>
                  //     <div id='bot'>
                  //       <Link to={item.path} id='project-title'>{item.title}</Link>
                  //     </div>
                  //   </div>
                  // </div>
                );
              }
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default FixedProjects;
