import React from 'react';
import { connect } from 'react-redux';
import * as cardActions from '../actions/index.js';
import { bindActionCreators } from 'redux'
import Menu from 'antd/lib/menu';

const CardMenu = ({toggleCard,id,...prop}) => {
  const onClick = (e) =>{
    toggleCard(e.key);
  }

  return(
    <div>
        <Menu mode="horizontal">
          <Menu.SubMenu title="...">
          <Menu.Item key={id} onClick={onClick}>Edit Task</Menu.Item>
          </Menu.SubMenu>
        </Menu>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(cardActions, dispatch)
}

// export default CardMenu
export default connect(mapStateToProps,mapDispatchToProps)(CardMenu)