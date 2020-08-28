import React, { useState } from 'react';
import { Form, FormGroup, Input, Button, Label, Card, Col, Row, CardHeader } from 'reactstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { POST_DATA, POST_SUCCESS } from '../action/action'; 

const initialProject = {
  project: "",
  "title": "",
  "summary": "",
  "importance": "",
  "values": {value_name: ""}

};  

const Projects = (props) => {
    const [projectToEdit, setProjectToEdit] = useState(initialProject);
    const [editing, setEditing] = useState(false);
    const [project, setProject] = useState({
      "title": "",
      "summary": "",
      "importance": "",
      "values": {value_name: ""}
    })

    

const { push } = useHistory(); 

 const editProject = (project) => {
  setEditing(true);
  setProjectToEdit(project);
}  

 const saveUpdate = e => {
  e.preventDefault();
  axiosWithAuth()
  .put('/projects' , projectToEdit)
  .then(res => {
      console.log(res.data)
      // setDependency(true)
  })
  .catch(err => {
      console.log(err)
  })
  // How can we update the animal information?
  // Where can we get the ID? 
  // Where is the information stored?

}


const inputHandler = (event) => {
    setProject({ ...project, [event.target.name]: event.target.value })
}

const submitHandler = (event) => {
    event.preventDefault();
    // props.postSmurfs(smurf)
}

const inputValues = (event) => {
  setProject({
    ...project, 
    values: {value_name: event.target.value}
  })
}

const addProject = (e) => {
  return dispatch => {
    dispatch({ type: POST_DATA })
  e.preventDefault();
  axiosWithAuth()
    .post(`/projects`, projectToEdit)
    .then((res) => {
      console.log('addProject Post request', res)
      dispatch({ type: POST_SUCCESS, payload: res.data })
      setProject(res.data);
      setProjectToEdit(project);
      push('/fetch')
    })
    .catch((err) => {
      console.log(err);
    });
  }
};


    const [checked, setChecked] = useState({
        isChecked: false
    })

    

        return (

            
            <Form id='project'  style={{ margin: '5%', marginLeft: '20%' }}>

              <Card style={{border: 'none', background: 'transparent', color: '#696969', marginRight: '25%'   }}  >
                <CardHeader style={{border: 'none', background: 'transparent', fontSize: '30px', fontWeight: 'bolder' }}  >
                  Select up to three Values for your project:
                </CardHeader>
              </Card>

              <Row>
                <Col sm="1.8">
              <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#696969'  }} >
             
              <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
                <Label check>
                  <Input 
                  type="checkbox" id='1' 
                  value={project.values.value_name}
                   onChange={inputValues} 
                    />  Authenticity 
                </Label>
              
                <Label check>
                   <Input 
                   type="checkbox"
                   id='2'
                   value={project.values.value_name} 
                   onChange={inputValues} 
                   /> Achievement
                </Label>
              
                <Label check>
                  <Input 
                  type="checkbox"
                  id='3' 
                  value={project.values.value_name}
                  onChange={inputValues} 
                    /> Adventure
                </Label>
              
                <Label check>
                   <Input 
                   type="checkbox"
                   id='4' 
                   value={project.values.value_name}
                   onChange={inputValues}  /> Authority
                </Label>
              
                <Label check>
                  <Input 
                  type="checkbox"
                  id='5'
                  value={project.values.value_name} 
                  onChange={inputValues}  /> Autonomy
                </Label>
              
                <Label check>
                   <Input 
                   type="checkbox"
                   id='6' 
                   value={project.values.value_name}
                   onChange={inputValues} 
                    /> Balance
                </Label>
              
                <Label check>
                  <Input 
                  type="checkbox"
                  id='7' 
                  value={project.values.value_name}
                  onChange={inputValues}  /> Beauty
                </Label>
              
                <Label check>
                   <Input 
                   type="checkbox" 
                   id='8' 
                   value={project.values.value_name}
                   onChange={inputValues} 
                   /> Boldness
                </Label>
              
                <Label check>
                  <Input 
                  type="checkbox"
                  id='9' 
                  value={project.values.value_name}
                  onChange={inputValues} 
                    /> Career
                </Label>

                </FormGroup>
                </Card>
                </Col>

                <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#696969',  }} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >

                <Label check>
                   <Input type="checkbox" /> Challenge
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Citizenship
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Compassion
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Community
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Competency
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Contribution
                </Label>
             
                <Label check>
                   <Input type="checkbox" /> Creativity
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Curiosity
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Determination
                </Label>

                </FormGroup>
                </Card>
                </Col>

                <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly', border: 'none', background: 'transparent', color: '#696969'}} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
                <Label check>
                  <Input type="checkbox" /> Fairness
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Faith
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Fame
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Family
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Friendships
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Fun
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Growth
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Happiness
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Health
                </Label>

                </FormGroup>
                </Card>
                </Col>

              <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#696969',  }} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
                <Label check>
                   <Input type="checkbox" /> Honesty
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Humor
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Influence
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Inner Harmony
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Justice
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Kindness
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Knowledge
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Leadership
                </Label>
              
                </FormGroup>
                </Card>
                </Col>

            <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent' , color: '#696969', }} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >

            <Label check>
                   <Input type="checkbox" /> Learning
                </Label>

                <Label check>
                  <Input type="checkbox" /> Love
                </Label>
             
                <Label check>
                   <Input type="checkbox" /> Loyalty
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Meaningful Work
                </Label>
             
                <Label check>
                   <Input type="checkbox" /> Openness
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Optimism
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Peace
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Pleasure
                </Label>
              
                
                </FormGroup>
                </Card>
                </Col>

              <Col sm="1.8">
              <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly',  border: 'none', background: 'transparent', color: '#696969',  }} >

              <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >

              <Label check>
                   <Input type="checkbox" /> Poise
                </Label>
             
                <Label check>
                  <Input type="checkbox" /> Popularity
                </Label>


                <Label check>
                   <Input type="checkbox" /> Recognition
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Religion
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Reputation
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Respect
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Responsibility
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Security
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Self-Respect
                </Label>
                

                </FormGroup>
                </Card>
                </Col>

            <Col sm="1.8">
            <Card style={{ width: '15%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-evenly', border: 'none', background: 'transparent', color: '#696969', }} >

            <FormGroup check style={{ padding: '25px', width: '20%', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', fontSize: '18px', fontWeight: 'bold' }} >
              
                <Label check>
                  <Input type="checkbox" /> Service
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Spirituality
                </Label>

                <Label check>
                  <Input type="checkbox" /> Stability
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Success
                </Label>
             
                <Label check>
                  <Input type="checkbox" /> Status
                </Label>
            
                <Label check>
                   <Input type="checkbox" /> Trustworthiness
                </Label>
              
                <Label check>
                  <Input type="checkbox" /> Wealth
                </Label>
              
                <Label check>
                   <Input type="checkbox" /> Wisdom
                </Label>
                </FormGroup>
                </Card>

                </Col>
               </Row> 




              <FormGroup style={{ width: '40%', margin: '2%', marginLeft: '22%', color: '#696969', fontWeight: 'bolder', fontSize: '20px' }} >
                <Label >Project Title</Label>
                <Input type='text' name='title' placeholder='Project Title Here' value={project.title}  onChange={inputHandler} />
              </FormGroup>

              <FormGroup style={{ width: '40%', margin: '2%', marginLeft: '22%', color: '#696969', fontWeight: 'bolder',  fontSize: '20px' }} >
                <Label >Project Description</Label>
                <Input Input type="textarea" name="text" placeholder='Enter Description Here' value={project.text}  onChange={inputHandler} />
              </FormGroup>

              <FormGroup row style={{ width: '60%', margin: '3%', marginLeft: '35%', color: '#696969', fontWeight: 'bolder',  fontSize: '20px' }} >
                <Label for="importance">Level of Importance</Label> 
                <Col sm={10}>
                  <Input  style={{ width: '10%', margin: '1%', marginLeft: '8%' }} type='text' name="select" id="importance" /* value={project.importance} onChange={inputHandler} */ >
                    
                  </Input>

                </Col>
            </FormGroup>

              <Button type='submit' onSubmit={submitHandler} style={{  background: '#FF6484', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', fontWeight: 'bold' ,  width: '20%',margin: '2%', marginRight: '18%',   }} >Submit</Button>
              
             
            </Form>
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