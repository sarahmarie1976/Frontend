import React from 'react';
import { connect } from 'react-redux';

import {  addProject } from '../action/action';

console.log(' addProject AC',  addProject)

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 
  title:'',
  summary:'',
  importance:'',
  value_name:'',
//   user_id:''
    }
  }


  handleChange = event => {
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addProject({ 
      title: this.state.title, 
      summary: this.state.summary,
      importance: this.state.importance,
       value_name:this.state.value_name,
       user_id: this.state.user_id

    })
    this.setState({ title: '', summary:'', importance:'',value_name:'', //user_id:'' })
})
  }

  render() {
    console.log('state, props', this.state, this.props)
    return (
      <div>
          <h3> You've reached TestAddProject </h3>
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input 
            type='text'
            name='title'
            placeholder='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Summary
          <input 
            type='text'
            name='summary'
            placeholder='summary'
            value={this.state.summary}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Importance
          <input 
            type='text'
            name='importance'
            placeholder='import'
            value={this.state.importance}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Select a value:
          <input 
            type='dropdown'
            name='value_name'
            placeholder='value'
            value={this.state.value_name}
            onChange={this.handleChange}
          />
        </label>

        {/* <label>
          user_id
          <input 
            type='text'
            name='user_id'
            placeholder='user id'
            value={this.state.user_id}
            onChange={this.handleChange}
          />
        </label> */}
        <button type='submit'>Add Project</button>
      </form>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps, { addProject })(ProjectForm)