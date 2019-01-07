export const addBoard = input => ({
  type: 'ADD_BOARD',
  input
})

export const addList = input => ({
  type: 'ADD_LIST',
  input
})


export const addCard = payload => ({
  type: 'ADD_CARD',
  payload
})

export const editCard2 = payload => ({
  type: 'EDIT_CARD',
  payload
})

export const editCard = payload => (dispatch,getState) => {
  if (getState().cards.byId[payload.cardid].updating === true) {
    dispatch(({type: 'EDIT_CARD',payload}))
  }
}

export const updatingCard = payload => ({
  type: 'UPDATING_CARD',
  payload
})


export const toggleCard = id => ({
  type: 'TOGGLE_CARD',
  id
})

export const updateCard = card => ({
  type: 'UPDATE_CARD',
  card
})

export const updateCard2 = (card) => {
  return (dispatch,getState) => {
    dispatch(updateCard2(card));
    return dispatch(allCards());
  }
}

export const moveCard = (fromId, toId) => ({
  type: 'MOVE_CARD',
  fromId,
  toId})

export const allCards = () => ({
  type: 'ALLCARDS',
  id: '1'
})