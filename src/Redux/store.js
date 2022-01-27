
import { createStore } from "redux";
import { fav_reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore ( fav_reducer , composeWithDevTools () )

export default store;