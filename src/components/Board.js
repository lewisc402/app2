import React from 'react';
import List from './List.js'
import ToggleCard from './ToggleCard.js'
import '../App.css';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



const Board = () => {
  return(
    <div style={{display: "flex"}}>
      <List idlist="1"/>
      <List idlist="2"/>
      <List idlist="3"/>
      <ToggleCard/>
    </div>
  )
}

// export default Board
export default DragDropContext(HTML5Backend)(Board);