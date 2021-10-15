import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bannerReducer from "./reducers/bannerReducer";
import movieReducer from "./reducers/movieReducer";
import cinemaReducer from "./reducers/cinemaReducer";
import authReducer from "./reducers/authReducer";
import ticketReducer from "./reducers/ticketReducer";

const rootReducer = combineReducers({
  bannerReducer,
  movieReducer,
  cinemaReducer,
  authReducer,
  ticketReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
