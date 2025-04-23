import changeTheNumber from "./calculator"
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    changeTheNumber:changeTheNumber
})

export default rootReducer;