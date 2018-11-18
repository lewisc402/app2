import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as cardActions from '../actions/index.js';
import Card from 'antd/lib/card';
import Input from 'antd/lib/input';
import CardItem from './Card.js';
import AddCard from './AddCard.js';

const {TextArea} = Input;
const List = ({cards,addCard,idlist,moveCard,...props}) => {
  return(
    <div style={{width: 300, marginRight: 30}}>
    <Card>
      <AddCard idlist={idlist}/>
      {Object.values(cards).filter(card => card.idlist == idlist).sort((a,b) => a.idposition - b.idposition).map(card => <CardItem moveCard={moveCard} card={card}/>)}
    </Card>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  cards: state.cards.byId
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(cardActions, dispatch)
 // addCard: card => dispatch(addCard(card))
}
// export default List
export default connect(mapStateToProps,mapDispatchToProps)(List)