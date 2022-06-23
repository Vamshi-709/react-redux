import { combineReducers } from "redux";
import iceCreamReducer from "./icecreams/iceCreamReducer";
import cakeReducer from "./cakes/cakeReducer";
import userReducer from'./users/usersReducer'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream :iceCreamReducer,
    users :userReducer
})

export default rootReducer