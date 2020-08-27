import React from 'react';
import {FETCH_DATA, FETCH_SUCCESS,FETCH_FAILURE} from '../action/action'
import projectsReducer from '../reducer/reducer';
import { getData } from '../action/TestingActionFunctions'
import {connect} from 'react-redux'
import  { axiosWithAuth }  from '../action/action'
import { removeProject } from '../action/action'







class TestProjectsFetch extends React.Component {
    constructor(props) {
    super(props)
    }
    componentDidMount(){
      this.props.getData()
    }

    render() {
        return (
            <div>
              <h2>Projects List</h2>
              {this.props.projects.length > 0 ? this.props.projects.map(project => {
                return (
                    <div style={{border:"1px solid black", margin:"0 auto", width:"50%"}}  key={project.id}>
                    <p> Title: {project.title}</p>
                    <p> Project ID #: {project.id} </p>
                    <p> Summary: { project.summary}</p>
                    <p> Importance: {project.importance}</p>
            <p> Value 1: {project.value_name}</p>
            
            <button onClick={removeProject(project.id)}>Remove Projects</button>
                    </div>

                )
              }) : <h2>Loading...</h2> }
            </div>
          )
    
}
        
    }

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        projects: state.projects,
        error:state.error
    }
}

export default connect  (mapStateToProps, {getData}) (TestProjectsFetch)

