
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {FETCH_DATA, FETCH_FAILURE, FETCH_SUCCESS, DELETE_SUCCESS} from '../action/action'
import React, { useState } from 'react';
export const PUT_DATA = 'PUT_DATA'
export const PUT_SUCCESS = 'PUT_SUCCESS'
export const PUT_FAIL = 'PUT_FAIL'

export const DELETE_REQ = 'DELETE_REQ'
export const DELETE_FAIL = 'DELETE_FAIL'
 export const DELETE_SUCCEEED = 'DELETE_SUCCEED'
 


// export const updateProjects = (projectId) => {
//     return dispatch => {
//       dispatch({ type: PUT_DATA })
//       axiosWithAuth()
//       .get('/projects/:id',projectId)
//         .then(response => {
//          dispatch({ type: PUT_SUCCESS, payload: response.data })
//         })
//         .catch(err => {
//           dispatch({ type: PUT_FAIL, payload: err })
//         })
//     }
//   }



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


  


