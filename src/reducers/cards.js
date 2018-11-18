import cloneDeep from 'lodash.clonedeep';

const initState = {
  byId:{
      "1":{id: "1",name:"name1",idlist:"2",idposition:3},
      "2":{id: "2",name:"name2",idlist:"2",idposition:2},
      "3":{id: "3",name:"name3",idlist:"3",idposition:1},
      "4":{id: "4",name:"name4",idlist:"2",idposition:1},
  },
  data:{
        card: {},
        updating: false
  }
}

const cards = (state=initState, action) => {
  let byId = {}
  let data = {}
  let newstate

  switch (action.type) {
    case 'ADD_CARD':
      byId = {...state.byId};
      byId[action.card.id] = action.card;
      for(let cd of Object.values(byId).filter(card => card.idlist === action.card.idlist)) {
        cd.idposition = cd.idposition + 1
        // console.log(value);
      }
      data.updating = false;
      newstate = {byId,data};
      return newstate;
    case 'TOGGLE_CARD':
      // if (Object.keys(state.data).length == 0 ) {
      if (Object.keys(action.id).length != 0) {
        let card = state.byId[action.id]; //byId.x1; //byId["1x"];
        data.card = card;
        data.updating = true;
        byId = {...state.byId};
        newstate = {byId,data};
        return newstate;
      }
      data.updating = false;
      byId = {...state.byId};
      newstate = {byId,data};
      return newstate
    case 'UPDATE_CARD':
      // const byId1 = {...state.byId['1']};
      byId = {...state.byId,[action.card.id]:action.card}
      // card[state.data.card.id] = state.data.card;
      // byId = {...state.byId,...card};
      data.updating = false;
      newstate = {byId,data};
      return newstate;
    case 'MOVE_CARD':
      newstate = cloneDeep(state);
      // byId = {...state.byId,
      //         [action.fromId]:{...state.byId[action.fromId]},
      //         [action.toId]:{...state.byId[action.toId]}};
      // // byId[action.fromId].idlist = '1';

      let pos = newstate.byId[action.toId].idposition;
      let idlist = newstate.byId[action.toId].idlist;
      let pos2 = newstate.byId[action.fromId].idposition;
      let idlist2 = newstate.byId[action.fromId].idlist;

      // if(idlist == idlist2) {
      //   // newstate.byId[action.fromId].idposition = -1;
      //   filterCard = Object.values(newstate.byId).filter(card => card.idposition > pos2 && card.idlist === idlist2);
      //   for(let cd of filterCard) {
      //     cd.idposition = cd.idposition - 1
      //   }          

      //   let filterCard = Object.values(newstate.byId).filter(card => card.idposition >= pos && card.idlist === idlist);
      //   // let filterCard = Object.values(byId).filter(card => card.idposition <= pos && card.idlist === idlist);
      //   for(let cd of filterCard) {
      //     cd.idposition = cd.idposition + 1
      //   }   

      //   newstate.byId[action.fromId].idlist = idlist;
      //   newstate.byId[action.fromId].idposition = pos;
      //   return newstate
      // }

      //processing of fromlist
      filterCard = Object.values(newstate.byId).filter(card => card.idposition > pos2 && card.idlist === idlist2);
      for(let cd of filterCard) {
        cd.idposition = cd.idposition - 1
      }        
            
      //processing of tolist
      let filterCard = Object.values(newstate.byId).filter(card => card.idposition >= pos && card.idlist === idlist);
      // let filterCard = Object.values(byId).filter(card => card.idposition <= pos && card.idlist === idlist);
      for(let cd of filterCard) {
        cd.idposition = cd.idposition + 1
      }      
      
      newstate.byId[action.fromId].idlist = idlist;
      newstate.byId[action.fromId].idposition = pos;


      // // [byId[action.fromId].idlist,byId[action.toId].idlist] = [byId[action.toId].idlist,byId[action.fromId].idlist];
      // // [byId[action.fromId].idposition,byId[action.toId].idposition] = [byId[action.toId].idposition,byId[action.fromId].idposition];
      // data.updating = false;
      // newstate = {byId,data};
      // return newstate;
      return newstate
    case 'ALLCARDS':
      byId = {...state.byId};
      data.updating = false;
      newstate = {byId,data};
      return newstate;    
    default:
      byId = {...state.byId};
      data.updating = false;
      newstate = {byId,data};
      return newstate;
  }
}

export default cards;