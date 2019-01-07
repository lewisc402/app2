import cloneDeep from 'lodash.clonedeep';
import shortid from 'shortid';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

const initState = {
  byId:{
      "1":{id: "1",name:"name1",updating: false, listId:"1",idposition:2},
      "2":{id: "2",name:"name2",updating: false, listId:"2",idposition:1},
      "3":{id: "3",name:"name3",updating: false, listId:"3",idposition:1},
      "4":{id: "4",name:"name4",updating: false, listId:"1",idposition:1},
  }
}

const cards = (state=initState, action) => {
  let byId = {}
  let data = {}
  let newstate
  const {payload} = action;

  switch (action.type) {
    case 'ADD_CARD':
      const id = shortid.generate();
      const card = {[id]:{id:id, name:payload.input,listId:payload.listid,idposition:0}}
      
      byId = {...state.byId};
      for(let cd of Object.values(byId).filter(card => card.listId === payload.listid)) {
         cd.idposition = cd.idposition + 1
      }
        newstate = {byId: {...byId,...card}};
      return newstate;
    case 'EDIT_CARD':
      newstate = cloneDeep(state);
      newstate.byId[action.payload.cardid].name = action.payload.text;
      newstate.byId[action.payload.cardid].updating = false;
      return newstate;
    case 'UPDATING_CARD':
      newstate = cloneDeep(state);
      newstate.byId[action.payload.id].updating = !state.byId[action.payload.id].updating;
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
      let idlist = newstate.byId[action.toId].listId;
      let pos2 = newstate.byId[action.fromId].idposition;
      let idlist2 = newstate.byId[action.fromId].listId;

      // if(idlist == idlist2) {
      //   // newstate.byId[actiisUpdate: "false", on.fromId].idposition = -1;
      //   filterCard = Object.values(newstate.byId).filter(caisUpdate: "false", rd => card.idposition > pos2 && card.idlist === idlist2);
      //   for(let cd of filterCard) {
     //isUpdate: "false",  //     cd.idposisUpdate: "false", ition = cd.idposition - 1
      //   }          

      //   let filterCard = Object.values(newstate.byId).filter(caisUpdate: "false", rd => card.idposition >= pos && card.idlist === idlist);
      //   // let filterCard = Object.values(byId).filter(caisUpdate: "false", rd => card.idposition <= pos && card.idlist === idlist);
      //   for(let cd of filterCard) {
     //isUpdate: "false",  //     cd.idposisUpdate: "false", ition = cd.idposition + 1
      //   }   

      //   newstate.byId[action.fromId].idlist = idlist;
      //   newstate.byId[actiisUpdate: "false", on.fromId].idposition = pos;
      //   return newstate
      // }

      //processing of fromlist
      filterCard = Object.values(newstate.byId).filter(card => card.idposition > pos2 && card.listId === idlist2);
      for(let cd of filterCard) {
        cd.idposition = cd.idposition - 1
      }        
            
      //processing of tolist
      let filterCard = Object.values(newstate.byId).filter(card => card.idposition >= pos && card.listId === idlist);
      // let filterCard = Object.values(byId).filter(caisUpdate: "false", rd => card.idposition <= pos && card.idlist === idlist);
      for(let cd of filterCard) {
        cd.idposition = cd.idposition + 1
      }      
      
      newstate.byId[action.fromId].listId = idlist;
      newstate.byId[action.fromId].idposition = pos;


      // // [byId[action.fromId].idlist,byId[action.toId].idlist] = [byId[action.toId].idlist,byId[action.fromId].idlist];
      // // [byId[actiisUpdate: "false", on.fromId].idposition,byId[acisUpdate: "false", tion.toId].idposition] = [byId[acisUpdate: "false", tion.toId].idposition,byId[actiisUpdate: "false", on.fromId].idposition];
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
      return state;
  }
}

export default cards;