import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as cardActions from '../actions/index.js';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import { bindActionCreators } from 'redux'
import shortid from 'shortid';

const FormItem = Form.Item;
const {TextArea} = Input;

class AddCard extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const {form,addCard,idlist} = this.props;
    const desc = form.getFieldValue('desc');
    const id = shortid.generate();
    const card = {id:id,name:desc,idlist:idlist,idposition:0}
    addCard(card);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return(
      <div>
      <Form layout="horizontal" onSubmit={this.onSubmit}>
          <FormItem>
          {getFieldDecorator('desc')(
            <TextArea autosize={{ minRows: 2, maxRows: 6 }}></TextArea>
            )} 
          <Button htmlType="submit" block type="primary" style={{marginTop:10}}>ADD CARD</Button>
         </FormItem> 
      </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => {
   return bindActionCreators(cardActions, dispatch)
  // addCard: card => dispatch(addCard(card))
}
const WrapperAddCard = Form.create()(AddCard);
export default connect(mapStateToProps,mapDispatchToProps)(WrapperAddCard)