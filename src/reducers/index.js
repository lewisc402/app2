import lists from '../reducers/lists.js';
import cards from '../reducers/cards.js';
import { combineReducers } from "redux";

export default combineReducers({
  lists,
  cards
})