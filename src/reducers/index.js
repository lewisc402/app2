import lists from '../reducers/lists.js';
import cards from '../reducers/cards.js';
import boards from '../reducers/boards.js';
import { combineReducers } from "redux";

export default combineReducers({
  boards,
  lists,
  cards
})