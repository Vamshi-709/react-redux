const redux = require('redux')
const thunkMiddleware = require ('redux-thunk').default
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const axios =require('axios')

const initialState = {
    loading: false,
    users: [],
    error:''
}

const FEATCH_USERS_REQUEST = 'FEATCH_USERS_REQUEST'
const FEATCH_USERS_SUCCESS = 'FEATCH_USERS_SUCCESS'
const FEATCH_USERS_FAILURE = 'FEATCH_USERS_FAILURE'

const featchUsersRequest = () => {
    return {
        type: FEATCH_USERS_REQUEST
    }
}
const featchUsersSuccess = users => {
    return {
        type: FEATCH_USERS_SUCCESS,
        payload: users
    }
}
const featchUsersFailure = error => {
    return {
        type: FEATCH_USERS_FAILURE,
        payload: error
    }
}
const reducer = (state = initialState, auction) => {
    switch (auction.type) {
        case FEATCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FEATCH_USERS_SUCCESS:
            return {
                loading: false,
                users: auction.payload,
                error: ''
            }
        case FEATCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: auction.payload
            }
    }
}
const fetchUsers =()=>{
   return function (dispatch){
    dispatch(featchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (res=> {
            const users = res.data.map(user => user.id)
            dispatch(featchUsersSuccess(users))
        })
        .catch (err =>{
            dispatch(featchUsersFailure(err.massage))
        })
   }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe (()=>{console.log(store.getState())})
store.dispatch(fetchUsers())