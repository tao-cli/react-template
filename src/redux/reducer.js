import { combineReducers } from "redux";

import tickReducer from "../modules/tickToe/reducer/tickReducer";
const reducer = combineReducers({
    tickState: tickReducer,
});
export default reducer;
