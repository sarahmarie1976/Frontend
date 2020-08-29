import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';   
export const DELETE_DATA = 'DELETE_DATA'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'
export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';



export const removeProject = ( project ) => {
    return () => {
      console.log('remove project action creator')
      axiosWithAuth()
      .delete(`/projects/${project}`,   { headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }})
    }
  }


export const getData = () => {
  console.log('was fired ***')
    return dispatch => {
      dispatch({ type: FETCH_DATA })
      axiosWithAuth()
      .get('/projects ',  { headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }})

        .then(response => {
          console.log('getData GET request', response)
          dispatch({ type: FETCH_SUCCESS, payload: response.data })
          
        })
        .catch(err => {
          dispatch({ type: FETCH_FAILURE, payload: err })
        })

    }
  }
