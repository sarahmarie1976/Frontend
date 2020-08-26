import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';   

export const DELETE_DATA = 'DELETE_DATA'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'

export const removeProject = (project) => {
    return dispatch => {
      console.log('remove project', project)
      dispatch({ type: DELETE_DATA})
      axiosWithAuth()
      delete(`/projects/:id`).then(res => {
          dispatch({type: DELETE_SUCCESS, payload: res.data });
      })
    }
  }



export const fetchProjects = () => (dispatch) => {
    dispatch({ type: FETCH_DATA })
    axios
        .get('https://hh-essenialism.herokuapp.com/api/projects')
        .then(res => {
            console.log('Fetch success', res.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('error', err);
            dispatch({ type: FETCH_FAILURE, payload: err })
        })
}

export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postProjects = (projects) =>  (dispatch) => {
    dispatch({ type: POST_DATA })
    axios 
        .post('https://hh-essenialism.herokuapp.com/api/projects', projects) 
        .then( res => {
            console.log('Post success!', res.data);
            dispatch({ type: POST_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('Error posting!', err);
            dispatch({ type: POST_FAILURE, payload: err })
        })
}
export const UPDATE_DATA = ' UPDATE_DATA ';
export const UPDATE_SUCCESS = ' UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const updateProjects = (projects) =>  (dispatch) => {
    dispatch({ type: POST_DATA })
    axios 
        .put('https://hh-essenialism.herokuapp.com/api/projects/:id', projects) 
        .then( res => {
            console.log('Update success!', res.data);
            dispatch({ type: UPDATE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('Error updating!', err);
            dispatch({ type: UPDATE_FAILURE, payload: err })
        })

}
