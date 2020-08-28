import React, { useEffect, useState } from 'react';
import {FETCH_DATA, FETCH_SUCCESS,FETCH_FAILURE} from '../action/action'
import projectsReducer from '../reducer/reducer';
import { getData } from '../action/TestingActionFunctions' 
import {connect} from 'react-redux'
import  { axiosWithAuth }  from  '../utils/axiosWithAuth'
import { removeProject } from '../action/action'
import { useHistory } from 'react-router-dom'
import Projects from './Projects'
import PrivateRoute from './PrivateRoute'

const initialProject = {
  "title": "",
  "summary": "",
  "importance": ""

};  

 const TestProjectsFetch = (props) =>  {
  const [projectToEdit, setProjectToEdit] = useState(initialProject);
  const [editing, setEditing] = useState(false); 

  const { push } = useHistory(); 

 const editProject = (project) => {
  setEditing(true);
  setProjectToEdit(project)
  console.log(project, 'why no log');
}  

 const saveUpdate = e => {
  e.preventDefault();
  axiosWithAuth()
  .put(`projects/${projectToEdit.id}`, projectToEdit,  { headers: {
    'Authorization': `Bearer ${localStorage.token}`
  }}) 
  .then(res => {
      console.log(res.data)
      // setDependency(true)
  })
  .catch(err => {
      console.log(err)
  })
}

useEffect(() => {
  props.getData()
},[])
        return (
            <div>
              <h2>Projects List</h2>
              {props.projects.length > 0 ? props.projects.map(project => {
                return (
                    <div style={{border:"1px solid black", margin:"0 auto", width:"50%"}}  key={project.id}>
                    <p> Title: {project.title}</p>
                    <p> Project ID #: {project.id} </p>
                    <p> Summary: { project.summary}</p>
                    <p> Importance: {project.importance}</p>
            {/* <p> Value 1: {project.values[0].value_name}</p> */}
            <h4>Value 1: {project.values[0].value_name}</h4>
            <h4>Value 1: {project.values[1].value_name}</h4>
            
            <button onClick={removeProject(project.id)}>Remove Projects</button>
<button onClick={()=> editProject(project)}> Edit Project </button>

                    </div>

                )
              }) : <h2>Loading...</h2> }

<form onSubmit={saveUpdate}>
              <legend>Update Project </legend>
              <label>
                 Title
                  <input 
                      onChange={e =>
                          setProjectToEdit({ ...projectToEdit, title: e.target.value })
                      }
                      value={projectToEdit.title}
                  />
              </label>
              <label>
                  summary:
                  <input 
                      onChange={e =>
                          setProjectToEdit({ ...projectToEdit, summary: e.target.value })
                      }
                      value={projectToEdit.summary}
                  />
              </label>

              <label>
              importance:
<input 
                     onChange={e =>
                          setProjectToEdit({ ...projectToEdit, importance: e.target.value })
                      }
                      value={projectToEdit.importance}
                  />
            
            
             
              <div>
                  <button type="submit">Update</button>
              </div>
              </label>
         </form>

             <PrivateRoute exact path='/projects' component={Projects}  projectToEdit={projectToEdit} setProjectToEdit={setProjectToEdit} editing={editing} setEditing={setEditing} initialProject={initialProject} /> 
            </div>
          )
    
            }
        
    

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        projects: state.projects,
        error:state.error
    }
}

export default connect  (mapStateToProps, {getData}) (TestProjectsFetch)





