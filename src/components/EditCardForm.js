import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { editCard,updatingCard } from '../actions';
import { Modal, Button, Input } from 'antd';

const {TextArea} = Input;

class EditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false , text: this.props.card.name}
  }

  showModal = () => {
    const {id,updatingCard,card} = this.props;
    this.setState({
      visible: true,text: card.name
    });
    updatingCard({id});
  }

  onChange = (e) => {
    let text = this.input.textAreaRef.value;
    this.setState({
      text: text,
    });
    e.preventDefault();
  }

  handleOk = (e) => {
    e.preventDefault();
    let text = this.input.textAreaRef.value;
    const {editCard} = this.props;
    const payload = {text,cardid:this.props.id}
    this.setState({
      visible: false,
    });
    editCard(payload);
  }

  handleCancel = (e) => {
    const {id,updatingCard} = this.props;
    this.setState({
      visible: false,
    });
    updatingCard({id});
  }

  render() {
    return (
      <div>
        <Button size="small" onClick={this.showModal}>
          edit
        </Button>
        <Modal
          title="Edit card"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea onChange={this.onChange} value={this.state.text} placeholder="Card name" autosize={{ minRows: 2, maxRows: 6 }} ref={ref=>this.input=ref}>
            
          </TextArea>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) => ({
  card: state.cards.byId[ownProps.id]
})
const mapDispatchToProps = dispatch => {
  return bindActionCreators({editCard,updatingCard}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(EditCardForm)
// export default CreateBoardForm;