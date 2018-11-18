import React from 'react';
import Card from 'antd/lib/card';
import CardMenu from './CardMenu';
import { DragSource,DropTarget} from 'react-dnd';


const cardSource = {
  beginDrag(props) {
    return {
      card: props.card
    }
  },

  isDragging(props, monitor) {
    // console.log(monitor.getItem().card.name);
    // console.log("bbb--" + props.card.id);
    return props.card.id === monitor.getItem().card.id;
  },
};

const cardTarget = {
  hover(props,monitor,component) {
    if (!component) {
      return null
    }

    const fromId = monitor.getItem().card.id
    const toId = props.card.id;

    if (fromId == toId) {
      console.log('xxfrom: ' + fromId);
      console.log('yyto: ' + toId);      
      return;
    }
    if (fromId !== toId) {
      console.log('fromId: ' + fromId);
      console.log('toId: ' + toId);
      props.moveCard(fromId,toId);
      // monitor.getItem().card.idposition = props.card.idposition;
    }
  }
};

const dragCollect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

const dropCollect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }
}
const CardItem = ({card, isDragging,connectDragSource,connectDropTarget}) => {
  const opacity= isDragging ? 0 : 1;

  return(connectDropTarget(connectDragSource(
    <div style={{marginTop:30,opacity}}>
      <Card
        title={card.name}
        id = {card.id}
        extra={<CardMenu id={card.id}/>}
      >
      {card.idposition}</Card>
    </div>
  )))
}

// export default CardItem
export default DropTarget('CARD',cardTarget,dropCollect)(DragSource('CARD',cardSource,dragCollect)(CardItem));
// export default DragSource('CARD',cardSource,dragCollect)(CardItem);