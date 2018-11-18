import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as cardActions from '../actions/index.js';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import Modal from 'antd/lib/modal';

const FormItem = Form.Item;
const {TextArea} = Input;

class ToggleCard extends Component {
  constructor(props) {
    super(props);
  }
  
  onSubmit = (e) => {
    e.preventDefault();;
    const card = {...this.props.data.card};
    card.name = e.target[0].value;
    const name = e.target[0].value;
    // const desc = this.props.form.getFieldValue('desc');
    // const id = card.id;
    // const newcard = {[id]:{...data,name:desc}};
    // this.props.toggleCard(newcard);
    this.props.updateCard(card);
    this.props.allCards();
  }

  showModal = () => {
    this.setState({
      show:true
    })
  }

  handleOK = (e) => {
    console.log(e);
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.toggleCard({});
  }


  render() {
    // const { data } = this.props;
    const data = {...this.props.data};
    let show = false;
    
    if (data.updating && show === false) {
      show = true;
    } 
    if (show) {
    const  text = data.card.name;
    return(
      <div>
        <Modal
          title="UPDATE TASK"
          visible={show}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Form layout="horizontal" autocomplete="off" onSubmit={this.onSubmit}>
            <TextArea>{text}</TextArea>
            <Button htmlType="submit" block type="primary" style={{marginTop:10}}>UPDATE TASK</Button>
            {/* <TextArea key="desc" autocomplete="off" autosize={{ minRows: 2, maxRows: 6 }}>{text}</TextArea> */}
          </Form>
        </Modal>
      </div>
    )} else return null;
  }
}

const mapStateToProps = (state) => ({
  data: state.cards.data
})

const mapDispatchToProps = dispatch => {
   return bindActionCreators(cardActions, dispatch)
  // addCard: card => dispatch(addCard(card))
}
const WrapperToggleCard = Form.create()(ToggleCard);
export default connect(mapStateToProps,mapDispatchToProps)(WrapperToggleCard)