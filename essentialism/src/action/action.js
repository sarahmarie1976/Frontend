import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';   

export const DELETE_DATA = 'DELETE_DATA'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'


export const removeProject = ( project ) => {
    return () => {
      console.log('remove project action creator', project)
      axiosWithAuth()
      .delete(`/api/projects/${project}`)
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




