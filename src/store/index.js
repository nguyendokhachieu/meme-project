import { applyMiddleware } from "redux";

import { postsReducer } from "./posts/reducer";
import { commentsReducer } from "./comments/reducer";
import { categoriesReducer } from "./categories/reducer";
import { userReducer } from "./user/reducer";
import { notificationsReducer } from "./notifications/reducer";
import { loadingReducer } from "./loading/reducer";
import { modalsReducer } from "./modals/reducer";

const { combineReducers } = require("redux");
const { createStore } = require("redux");

const middleware = store => next => action => {
    if (typeof(action) === 'function') {
        return action(store.dispatch);
    }

    return next(action);
}

// remove when build production
function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    categories: categoriesReducer,
    user: userReducer,
    notifications: notificationsReducer,
    loading: loadingReducer,
    modals: modalsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(middleware, logger));