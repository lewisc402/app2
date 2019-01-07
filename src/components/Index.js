import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import '../App.css';
import Layout from 'antd/lib/layout';
import Tabs from 'antd/lib/tabs';
import {Button} from 'antd';
import Card from 'antd/lib/card';
import CreateBoardForm from './CreateBoardForm.js';
import Board from './Board.js';
import Item from 'antd/lib/list/Item';

const { Header, Footer, Sider, Content } = Layout;
const TabPane = Tabs.TabPane;
const operations = <CreateBoardForm></CreateBoardForm>;

const Index = ({byId,...props}) => {
  return (
    <div>
      <Layout>
        <Header style={{color: "#fff"}}>Task Tracker</Header>
        <Content>
          <Layout>
            <Header className="subheader">
              <span>UserName</span>
              <span><div>end</div></span>
            </Header>
            <Content className="content">
              <Tabs tabBarExtraContent={<CreateBoardForm></CreateBoardForm>}>
               {Object.values(byId).map(itm => <TabPane tab={itm.name} key={itm.id}><Board key={itm.id} id={itm.id}/></TabPane>)}

                <TabPane tab="Welcome" key="7">
                 <div className="container">
                  <div className="listContainer">
                    <div className="listHeader"><h5>listheader</h5></div>
                    <div className="listContent">
                    <Card>
                      card1
                      kuku
                    </Card>
                    <Card>card1</Card>
                    <Card>card1</Card>
                    </div>
                  </div>
                  <div className="listContainer">
                    <div className="listHeader">listheader</div>
                    <div className="listContent">listcontent</div>
                  </div>     
                 </div>              
                </TabPane>
              </Tabs>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  )
}

const mapStateToProps = (state,ownProps) => ({
  byId: state.boards.byId
})

const mapDispatchToProps = dispatch => {
  // return bindActionCreators(cardActions, dispatch)
}
// export default Index;
export default connect(mapStateToProps,mapDispatchToProps)(Index)