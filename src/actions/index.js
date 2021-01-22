import axios from 'axios';

export const GET_SMURFS_START = 'GET_SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURFS_START';
export const ADD_SMURF_FAILURE = 'ADD_SMURFS_FAILURE';

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: GET_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_SMURFS_FAILURE, payload: err.response.code });
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then((res) => {
      getSmurfs();
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response.data });
    });
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
