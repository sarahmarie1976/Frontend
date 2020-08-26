import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllProjects = (props) => {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const getProjects = () => {
            axios
                .get('https://hh-essenialism.herokuapp.com/api/projects')
                .then((response) => {
                    setProjectList(response.data);
                })
                .catch((error) => {
                    console.error('Server Error', error);
                });
        };
        getProjects();
    }, []);
  
  return (
    <>
      {projectList.map(project => (
        <>
        <h2>{project.title}</h2>
        <h4>{project.summary}</h4>
        <h4>{project.id}</h4>
        </>
      ))}
    </>
  );
}

export default AllProjects;