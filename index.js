const redux = require('redux')
const reduxLogger =  require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware 

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
    return {
        type: "BUY_CAKE",
        info: "First redux action"
    }
}
function buyIceCream() {
    return {
        type: "BUY_ICECREAM",

    }
}

// (prevousState ,auction ) =>newState
// const initialState = {
//     numOfCakes : 10,
//     numOfIceCreams : 20,
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, auction) => {
    switch (auction.type) {
        case "BUY_CAKE": return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, auction) => {
    switch (auction.type) {
        case "BUY_CAKE": return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake :cakeReducer,
    iceCream :iceCreamReducer,
})

const store = createStore(rootReducer,applyMiddleware(logger))
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
// store.dispatch(buyCake())