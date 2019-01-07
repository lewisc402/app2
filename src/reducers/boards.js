import shortid from 'shortid';

const initState = {
  byId:{
      "1":{id: "1",name:"Welcome"},
      "2":{id: "2",name:"boardname2"},
      "4":{id: "4",name:"boardname4"}
  }
}

const boards = (state=initState, action) => {
  let newstate;
  switch (action.type) {
    case 'ADD_BOARD':
      const id = shortid.generate();
      const board = {[id]:{id:id, name:action.input}}
      newstate = {byId: {...state.byId,...board}}
      return newstate;
    default:
      return state;
  }
}

export default boards