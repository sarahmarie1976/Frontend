import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Label, Card, Col, Row, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { POST_DATA, POST_SUCCESS } from '../action/action'; 


// const initialProject = {
//   project: "",
//   "title": "",
//   "summary": "",
//   "importance": "",
//   "values": {value_name: ""}

// };  

const Projects = ({ projectToEdit, setProjectToEdit, editing, setEditing, initialProject}) => {
    [projectToEdit, setProjectToEdit] = useState(initialProject);
    [editing, setEditing] = useState(false);
    const [project, setProject] = useState({
      "title": "test title",
      "summary": " lorem ipsum summary",
      "importance": "4",
      "values": [
       {'id':'5',
       "value_name":'Autonomy'
      },
      {'id':'6',
      "value_name":'Balance'
     }
      //  {
      //   "value_name":'Career'
      //  }, {
      //   "value_name":'Health'
      //  }
      ]
    })

    

const { push } = useHistory(); 




// const inputHandler = (event) => {
//     setProject({ ...project, [event.target.name]: event.target.value })
//     console.log(event.target.value)
    
// }



// const inputValues = (event) => {
//   console.log(event, 'input values')
//   setProject({
//     ...project, 
//     values: {value_name: event.target.value}
//   })
// }

const addProject = (e) => {
  console.log(project)
  // return dispatch => {
    // dispatch({ type: POST_DATA })
  e.preventDefault();
  axiosWithAuth()
    .post(`/projects`, project ,  { headers: {
      'Authorization': `Bearer ${localStorage.token}`
    }})
    .then((res) => {
      console.log('addProject Post request', res, project)
      // dispatch({ type: POST_SUCCESS, payload: res.data })
      setProject(res.data);
      setProjectToEdit(project);
      console.log('this response',res.data)
      push('/fetch')
    })
    .catch((err) => {
      console.log('error from adding project',err);
    });
  // }
};



    // const [checked, setChecked] = useState({
  
    //     isChecked: false

    // })

    console.log(project,'projects')

        return (
<>
<h1> New project: </h1>
            <p> Title: test title </p>
      <p> Summary:  lorem ipsum summary" </p>
      <p> Importance: "4"</p>
       <p> Values: [
       id:'5',
       value_name:'Autonomy'
      ,
      id:'6',
      "value_name":'Balance'
     
            </p>
            <Button style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' , textShadow: '2px 2px 8px #C0C0C0 ', width: '15%', display:"block", margin:"0 auto" , color:"white", marginTop:"10%"}} onClick={addProject}>  Add new project </Button>
            </>
          );
        }

    const mapStateToProps = (state) => {
      return {
        projects: state.projects
      }
    }

export default connect(
  mapStateToProps,
  {}
)(Projects);