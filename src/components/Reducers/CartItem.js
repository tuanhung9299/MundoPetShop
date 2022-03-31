const Cartitem = (state = [], action) => {
  {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload]
      case 'Remove_To_Cart':
    }
    return state
  }
}

export default Cartitem
