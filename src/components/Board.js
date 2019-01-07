import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Button} from 'antd';
import List from './List.js';
import CreateListForm from './CreateListForm.js'
import '../App.css';

const Board = ({id,byId,...props}) => {
  return(
    <div>
      <div className="container">
        {Object.values(byId).map(itm => <List id={itm.id} list={itm}></List>)}
        <CreateListForm/>
      </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  byId: Object.values(state.lists.byId).filter(obj => obj.boardId===ownProps.id)
  // byId: state.lists.byId
})

const mapDispatchToProps = dispatch => {
  // return bindActionCreators(cardActions, dispatch)
}
// export default Board
export default connect(mapStateToProps,mapDispatchToProps)(DragDropContext(HTML5Backend)(Board));
// export default DragDropContext(HTML5Backend)(Board);