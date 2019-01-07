import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Input,Button} from 'antd';
import CreateCardForm from './CreateCardForm.js';
import Card from './CardItem.js';
import { moveCard } from '../actions';
import '../App.css';

const List = ({list,byId,moveCard,...props}) => {
  return(
    <div>
      <div className="listContainer">
        <div className="listHeader">
           <span>{list.name}</span>
           <span style={{float: "right"}}><CreateCardForm id={list.id}></CreateCardForm></span>
        </div>
        <div className="listContent">
          {Object.values(byId).sort((a,b) => a.idposition - b.idposition).map(itm => <Card moveCard={moveCard} card={itm}></Card>)}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  byId: Object.values(state.cards.byId).filter(obj => obj.listId === ownProps.id)
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({moveCard}, dispatch)
 // addCard: card => dispatch(addCard(card))
}
// export default List
export default connect(mapStateToProps,mapDispatchToProps)(List)