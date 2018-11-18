export const addCard = card => ({
  type: 'ADD_CARD',
  card
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