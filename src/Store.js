import { createStore } from "redux";
import CounterReducer from "./Services/Reducers/CounterReducer";




const store = createStore(CounterReducer)

export default store;