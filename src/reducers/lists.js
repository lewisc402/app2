import shortid from 'shortid';

const initState = {
  byId:{
      "1":{id: "1",name:"listname1",boardId:"1"},
      "2":{id: "2",name:"listname2",boardId:"1"},
      "3":{id: "3",name:"listname2",boardId:"2"}
  }
}

const lists = (state=initState, action) => {
  let newstate
  switch (action.type) {
    case 'ADD_LIST':
      const id = shortid.generate();
      const list = {[id]:{id:id, name:action.input,boardId:"1"}}
      newstate = {byId: {...state.byId,...list}}
      return newstate;
    default:
      return state;
  }
}

export default lists