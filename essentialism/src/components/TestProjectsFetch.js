import React, { useEffect, useState } from 'react';
import {FETCH_DATA, FETCH_SUCCESS,FETCH_FAILURE} from '../action/action'
import projectsReducer from '../reducer/reducer';
import { getData } from '../action/action' 
import {connect} from 'react-redux'
import  { axiosWithAuth }  from  '../utils/axiosWithAuth'
import { removeProject } from '../action/action'
import { useHistory, Link } from 'react-router-dom'
import Projects from './Projects'
import PrivateRoute from './PrivateRoute'
import { Form, Label, Input, FormGroup, Navbar, Button, Card, CardHeader,  NavItem, Nav, CardTitle } from 'reactstrap';

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

 const saveUpdate = (e) => {
  e.preventDefault();
  axiosWithAuth()
  .put(`projects/${projectToEdit.id}`, projectToEdit,  { headers: {
    'Authorization': `Bearer ${localStorage.token}`
  }}) 
  .then(res => {
      console.log(res.data)
      
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
                

              <h2 style={{color:"whitesmoke", background:"#FF6484"}}>Projects List</h2>
              {props.projects.length > 0 ? props.projects.map(project => {
                return (
                    
                    <div style={{border:"1px solid black", margin:"10px auto", width:"50%", borderRadius:"2%", background:"rgba(0,0,0,.5)"}}  key={project.id}>
                    <h1 style={{margin:"5%", background:'whitesmoke', border:"2%"}}> Title: {project.title} </h1>
                    <p style={{color:"whitesmoke"}}> Project ID #: {project.id} </p>
                    <p style={{color:"whitesmoke"}}> Summary: { project.summary}</p>
                    <p style={{color:"whitesmoke"}}> Importance: {project.importance}</p>
            {/* <p> Value 1: {project.values[0].value_name}</p> */}
            <p style={{color:"whitesmoke"}}>Value 1: {project.values[0].value_name}</p>
            <p style={{color:"whitesmoke"}}>Value 2: {project.values[1].value_name}</p>
            
            <Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '30%', margin:'2%' }} onClick={removeProject(project.id)}>Remove Projects </Button>
<Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '30%' }} onClick={()=> editProject(project)}> Edit Project </Button>
     
                    </div>
                    
               
                    

                )
               
         
              }) : <h2>Loading...</h2> }

<form onSubmit={saveUpdate}>
              <legend>Update Project </legend>
              <label>
                 Title:
                  <Input 
                      onChange={e =>
                          setProjectToEdit({ ...projectToEdit, title: e.target.value })
                      }
                      value={projectToEdit.title}
                  />
              </label>
              <br/>
              <label>
                  Summary:
                  <Input 
                      onChange={e =>
                          setProjectToEdit({ ...projectToEdit, summary: e.target.value })
                      }
                      value={projectToEdit.summary}
                  />
              </label>
              <br/>
              <label>
              Importance:
<Input 
                     onChange={e =>
                          setProjectToEdit({ ...projectToEdit, importance: e.target.value })
                      }
                      value={projectToEdit.importance}
                  />
            
            
             
              <div>
              <br/>
                  <Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '150px', margin:"0 auto", display:"block" }} type="submit">Update</Button>
                  
              </div>
              </label>
         </form>
         <Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '150px', display:"block", margin:"0 auto" , color:"white"}}> 
        <Link to="/projects"> <PrivateRoute exact path='/projects' component={Projects}  projectToEdit={projectToEdit} setProjectToEdit={setProjectToEdit} editing={editing} setEditing={setEditing} initialProject={initialProject} /> Add Project </Link> </Button> 

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





