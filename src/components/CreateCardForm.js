import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { addCard } from '../actions';
import { Modal, Button, Input } from 'antd';

const {TextArea} = Input;

class CreateCardForm extends React.Component {
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
    const {addCard} = this.props;
    const payload = {input,listid:this.props.id}
    this.setState({
      visible: false,
    });
    addCard(payload);
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {addBoard} = this.props;
    return (
      <div>
        <Button size="small" onClick={this.showModal}>
          Add new card
        </Button>
        <Modal
          title="Create new card"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea placeholder="Card name" autosize={{ minRows: 2, maxRows: 6 }} ref={ref=>this.input=ref}/>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  // byId: state.boards.byId
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({addCard}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCardForm)
// export default CreateBoardForm;