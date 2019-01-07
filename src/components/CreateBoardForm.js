import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {addBoard} from '../actions';
import { Modal, Button, Input } from 'antd';

const {TextArea} = Input;

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    let input = this.input.textAreaRef.value;
    const {addBoard} = this.props;
    this.setState({
      visible: false,
    });
    addBoard(input);
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const {addBoard} = this.props;
    return (
      <div>
        <Button size="small" onClick={this.showModal}>
          Add board
        </Button>
        <Modal
          title="Create new board"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea placeholder="Board name" autosize={{ minRows: 2, maxRows: 6 }} ref={ref=>this.input=ref}/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  // byId: state.boards.byId
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({addBoard}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateBoardForm)
// export default CreateBoardForm;